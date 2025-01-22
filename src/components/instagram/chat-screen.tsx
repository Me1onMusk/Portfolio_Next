
'use client'; 

import { useIdStore, useIndexStore, usePresenceState } from "@/utils/zustand/store"; 
import { useEffect, useState } from "react"; 
import { useMutation, useQuery } from "@tanstack/react-query"; 
import { getUserById } from "@/app/actions/chatActions"; 
import { createBrowserSupabaseClient } from "@/utils/supabase/client"; 
import Person from "./person";  
import Message from "./message"; 

// 메세지 보내기 //
export async function sendMessage({ message, chatUserId }) { 
    const supabase = createBrowserSupabaseClient();
    const {
        data: { session },
        error
    } = await supabase.auth.getSession();

    if(error || !session?.user) 
        throw new Error("User is not authenticated");

    const {
        data,
        error: sendMessageError
    } = await supabase
        .from('message')
        .insert({
            message,
            receiver: chatUserId
        })

    if(sendMessageError)
        throw new Error(sendMessageError.message);

    return data;
};

// 모든 메세지 가져오기 //
export async function getAllMessage({ chatUserId }) {
    const supabase = createBrowserSupabaseClient();
    const {
        data: { session },
        error
    } = await supabase.auth.getSession();

    if(error || !session?.user) 
        throw new Error("User is not authenticated");

    const {
        data,
        error: getAllMessageError
    } = await supabase
        .from('message')
        .select('*')
        .or(`receiver.eq.${chatUserId}, receiver.eq.${session.user.id}`)
        .or(`sender.eq.${chatUserId}, receiver.eq.${session.user.id}`)
        .order('created_at', { ascending: true });

    if(getAllMessageError)
        return [];

    return data;
};

// 채팅 화면 //
export default function ChatScreen() {

    const { selectedUserId } = useIdStore();
    const { selectedUserIndex } = useIndexStore();
    const [ message, setMessage ] = useState("");
    const supabase = createBrowserSupabaseClient();
    const { presence }  = usePresenceState();

    // 모든 메세지 쿼리 //
    const getAllMessageQuery = useQuery({
        queryKey: ['message', selectedUserId],
        queryFn: () => getAllMessage({
            chatUserId: selectedUserId
        })
    });

    // 해당 유저 쿼리 //
    const selectedUserQuery = useQuery({
        queryKey: ['user', selectedUserId],
        queryFn: () => getUserById(selectedUserId)
    });

    // 메세지 보내기 //
    const sendMessageMutation = useMutation({
        mutationFn: async() => {
            return sendMessage({
                message,
                chatUserId: selectedUserId
            })
        },
        onSuccess: () => {
            setMessage("")
            getAllMessageQuery.refetch()
        }
    });

    // 처음 시작 시 //
    useEffect(() => {
        const channel = supabase
            .channel('message_change')
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'message'
            },
            (payload) => {
                if(payload.eventType === 'INSERT' && !payload.errors)
                    getAllMessageQuery.refetch(); 
            }).subscribe()

        return () => { channel.unsubscribe() };
    }, []);

    return(
        selectedUserQuery.data !== null ? 
        (
            <div className="flex border w-full m-5 flex-col"> 
                <Person 
                    index={ selectedUserIndex } 
                    name={ selectedUserQuery.data?.email?.split('@')?.[0] } 
                    isActive={ false } 
                    onChatScreen={ false } 
                    onlineAt={ presence?.[selectedUserId]?.[0]?.onlineAt } 
                    userId={ selectedUserQuery.data?.id } />
                <div className="flex-1 w-full flex flex-col gap-3 p-3 overflow-hidden">
                    {
                        getAllMessageQuery.data?.map( msg => ( 
                            <Message 
                                key={ msg.id } 
                                message={ msg.message } 
                                isFromMe={ msg.receiver === selectedUserId } />  
                        ))
                    } 
                    <Message 
                        message={ 'Hello' }
                        isFromMe={ 'aaa' } /> 
                </div>
                <div className="flex flex-row">
                    <input
                        className="border rounded-lg pl-2 items-center justify-center flex-1"
                        placeholder="메세지 입력"/>
                    <button
                        className="bg-blue-300"
                        onClick={() => sendMessageMutation.mutate()} >
                        { sendMessageMutation.isPending ? <p>Loading...</p> : <span>전송</span> }
                    </button>
                </div>
            </div>
        ) : 
        (<div></div>)
    );
};
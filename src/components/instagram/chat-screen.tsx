
'use client'; 

import { useIdStore, useIndexStore, usePresenceState } from "@/utils/zustand/store"; 
import { useEffect, useState } from "react"; 
import { useMutation, useQuery } from "@tanstack/react-query"; 
import { getAllMessage, getUserById, sendMessage } from "@/app/actions/chatActions"; 
import { createBrowserSupabaseClient } from "@/utils/supabase/client"; 
import Person from "./person";  
import Message from "./message"; 
import { IoIosSend } from "react-icons/io";

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
            .channel('message_change')  //'message_change'라는 이름의 채널을 생성
            .on('postgres_changes', {   //PostgreSQL 데이터베이스의 'public' 스키마에 있는 'message' 테이블에서 'INSERT' 이벤트를 청취
                event: 'INSERT',
                schema: 'public',
                table: 'message'
            },
            (payload) => {  //이벤트가 'INSERT'이고 에러가 없는 경우 메시지 데이터를 다시 가져옴.
                if(payload.eventType === 'INSERT' && !payload.errors) getAllMessageQuery.refetch(); 
            }).subscribe() 

        return () => { channel.unsubscribe() };  //컴포넌트가 언마운트될 때 채널 구독을 해제하여 메모리 누수를 방지
    }, []);

    return(
        selectedUserIndex !== null ? 
        (
            <div className="flex border w-full flex-col"> 
                <Person 
                    index={ selectedUserIndex } 
                    name={ selectedUserQuery.data?.email?.split('@')?.[0] } 
                    isActive={ false } 
                    onChatScreen={ false } 
                    onlineAt={ new Date().toISOString() } 
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
                </div>
                <div className="flex flex-row">
                    <input
                        value={ message }
                        className="border rounded-lg pl-2 items-center justify-center flex-1 dark:bg-white dark:text-black bg-gray-50"
                        onChange={ e => setMessage(e.target.value) }
                        placeholder="메세지 입력"/>
                    <button
                        className="dark:bg-blue-500 bg-blue-300 rounded-lg p-2 flex items-center" 
                        onClick={() => sendMessageMutation.mutate()} >
                        { sendMessageMutation.isPending ? <p>Loading...</p> : <span>전송</span> }
                        <IoIosSend />
                    </button>
                </div>
            </div>
        ) : 
        (
            <div className="flex border w-full flex-col">
                <div className="flex-1 w-full flex flex-col gap-3 p-3 overflow-hidden">
                </div>
            </div>
        )
    );
};
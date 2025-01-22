
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { useIdStore, useIndexStore, usePresenceState } from "@/utils/zustand/store";
import { getAllUsers } from "@/app/actions/chatActions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Person from "./person";

export default function ChatPeopleList({ loggedInUser }) {

    const supabase = createBrowserSupabaseClient(); 
    const { selectedUserId, setSelectedUserId } = useIdStore();
    const { selectedUserIndex, setSelectedUserIndex } = useIndexStore();   
    const { presence, setPresence } = usePresenceState(); 

    // 모든 유저 가져오기 //
    const getAllUsersQuery = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const allUsers = await getAllUsers();
            return allUsers.filter((user) => user.id !== loggedInUser.id);
        }
    });

    // 처음 시작 시 //
    useEffect(() => {
        const channel = supabase.channel('online_users', {
            config: {
                presence: { key: loggedInUser.id }
            }
        })

        channel.on('presence', { event: 'sync'}, () => {
            const newState = channel.presenceState();
            const newStateObj = JSON.parse(JSON.stringify(newState));
            setPresence(newStateObj);
        })

        channel.subscribe(async (status) => {
            if(status !== 'SUBSCRIBED') return;

            const newPresenceStatus = await channel.track({
                onlineAt: new Date().toISOString()
            })
        });

        return () => { channel.unsubscribe(); }
    }, []);

    return (
        <div className="flex flex-col bg-gray-50 border w-1/4">
            {
                getAllUsersQuery.data?.map((user, index) => (
                    <Person 
                        key={ user.id }
                        index={ index }
                        name={ user.email?.split('@')?.[0] }
                        isActive={ selectedUserId === user.id }
                        onChatScreen={ false }
                        onlineAt={ "presence?.[user.id]?.[0]?.onlineAt" } 
                        userId={ user.id }
                        onClick={() => {
                            setSelectedUserId(user.id)
                            setSelectedUserIndex(index)
                        }} />
                ))
            }
                <Person 
                    index={ selectedUserIndex } 
                    name={ "Kim" } 
                    isActive={ false } 
                    onChatScreen={ false } 
                    onlineAt={ "" } 
                    userId={ "" } />
                <Person 
                    index={ selectedUserIndex } 
                    name={ "Lee" } 
                    isActive={ false } 
                    onChatScreen={ false } 
                    onlineAt={ "" } 
                    userId={ "" } />
        </div>
    );
};
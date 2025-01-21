
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { useIdStore, useIndexStore, usePresenceState } from "@/utils/zustand/store";
import { getAllUsers } from "@/app/actions/chatActions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function ChatPeopleList({ loggedInUser }) {

    const supabase = createBrowserSupabaseClient(); 
    const { selectedUserId, setSelectedUserId } = useIdStore();
    const { selectedUserIndex, setSelectedUserIndex } = useIndexStore();   
    const { presence, setPresence } = usePresenceState(); 

    // 모든 유저 가져오기 //
    const getAllUsersQuery = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const allUsers = await getAllUsers()
            console.log(allUsers)
            return allUsers.filter((user) => user.id !== loggedInUser.id);
        }
    });

    // 처음 시작 시 //
    useEffect(() => {
        const channel = supabase.channel('online_users', {
            config: {
                presence: {
                    key: loggedInUser.id
                }
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
        <div>
            {
                
            }
        </div>
    );
};
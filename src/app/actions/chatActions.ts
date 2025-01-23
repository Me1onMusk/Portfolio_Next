
'use server';

import { createServerSupabaseAdminClient, createServerSupabaseClient } from "@/utils/supabase/server";

// 모든 유저 가져오기 //
export async function getAllUsers() {
    
    const supabase = await createServerSupabaseAdminClient();
    const { data, error } = await supabase
        .auth
        .admin
        .listUsers()
    
    if(error) return [];

    return data.users;
};

// 해당 ID 유저 가져오기 //
export async function getUserById(userId) {

    const supabase = await createServerSupabaseAdminClient();
    const { data, error } = await supabase.auth.admin.getUserById(userId);

    if(error) return null; 

    return data.user; 
};

// 메세지 보내기 //
export async function sendMessage({ message, chatUserId }) { 
    const supabase = await createServerSupabaseClient();
    const {
        data: { session },
        error
    } = await supabase.auth.getSession();

    if(error || !session?.user) throw new Error("User is not authenticated");

    const { data, error: sendMessageError } = await supabase
        .from("message")
        .insert({
            message,
            is_deleted: false,
            receiver: chatUserId,
            sender: session.user.id,
        });

    if(sendMessageError) throw new Error(sendMessageError.message);

    return data;
};

// 모든 메세지 가져오기 //
export async function getAllMessage({ chatUserId }) {
    const supabase = await createServerSupabaseClient();
    const {
        data: { session },
        error
    } = await supabase.auth.getSession();

    if(error || !session?.user) throw new Error("User is not authenticated");

    const {
        data,
        error: getAllMessageError
    } = await supabase
        .from("message")
        .select("*")
        .or(`receiver.eq.${chatUserId},receiver.eq.${session.user.id}`)
        .or(`sender.eq.${chatUserId},sender.eq.${session.user.id}`)
        .order("created_at", { ascending: true });

    if(getAllMessageError) return [];

    return data;
};

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
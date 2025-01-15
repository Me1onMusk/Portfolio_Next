
'use server';

import { createServerSupabaseClient } from "@/utils/supabase/server";

function handlerError(error) {
    if(error)
        throw error;
};

// 파일 업로드 // 
export async function uploadFile(formData: FormData) {
    const supabase = await createServerSupabaseClient();
    const files = Array.from(formData.entries()).map(([name, file]) => file as File);
    
    const results = await Promise.all(
        files.map(file => supabase.storage
            .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET as string)
            .upload(file.name, file, {upsert: true})
        )
    );

    return results; 
};

// 파일 검색 // 
export async function searchFiles(search: string = '') {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET as string)
        .list(undefined, {
            search
        });
        
    handlerError(error);

    return data;
};

// 파일 삭제 //
export async function deleteFile(fileName: string) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET as string) 
        .remove([fileName])

    handlerError(error); 

    return data; 
};
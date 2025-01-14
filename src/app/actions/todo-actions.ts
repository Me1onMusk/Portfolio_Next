
'use server';

import { Database } from "../../../types_db";
import { createServerSupabaseClient } from "../../utils/supabase/server";

export type TodoRow = Database["public"]["Tables"]["todo"]["Row"]; 
export type TodoRowInsert = Database["public"]["Tables"]["todo"]["Insert"]; 
export type TodoRowUpdate = Database["public"]["Tables"]["todo"]["Update"]; 

// 에러 처리 //
function handleError(error) {
    console.error(error);
    throw new Error(error.message);
};

// ToDo 가져오기 (Read) //
export async function getToDos({searchInput = ''}) {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
        .from('todo')
        .select('*')
        .like('title', `%${searchInput}%`)
        .order('created_at', {ascending: true}); 

    if(error) 
        handleError(error);

    return data;
};

// ToDo 생성하기 (Create) //
export async function createToDo(todo: TodoRowInsert) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('todo')
        .insert({
            ...todo,
            created_at: new Date().toISOString()
        });

    if(error)
        handleError(error);

    return data;
};

// ToDo 업데이트하기 (Update) //
export async function updateToDo(todo: TodoRowUpdate) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('todo')
        .update({
            ...todo,
            updated_at: new Date().toISOString()
        })
        .eq('id', todo.id as number);

    if(error)
        handleError(error);
    
    return data;
};

// ToDo 삭제하기 (Delete) //
export async function deleteToDo(id: number) {
    const supabase = await createServerSupabaseClient(); 

    const { data, error } = await supabase
        .from('todo')
        .delete()
        .eq("id", id);

    if(error)
        handleError(error);
    
    return data;
};
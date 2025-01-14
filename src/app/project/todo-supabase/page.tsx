
'use client';

import { createToDo, getToDos } from "@/app/actions/todo-actions";
import ToDo from "@/components/todo-supabase/todo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Page() {
    
    const [ searchInput, setSearchInput ] = useState('');

    const todosQuery = useQuery({
        queryKey: ['todos', searchInput],
        queryFn: () => getToDos({ searchInput })
    });

    const createToDoMutation = useMutation({
        mutationFn: () => createToDo({
            title: 'New ToDo',
            completed: false
        }),
        onSuccess: () => {
            todosQuery.refetch();
        }
    });
    
    return(
        <div className="container mx-auto flex px-5 py-24 pb-5 md:flex-row flex-col items-center">
            <div className="flex-grow flex flex-col items-center text-center">

                <div className="w-2/5 mx-auto flex flex-col items-center py-10">
                    <h1 className="text-3xl font-bold pb-10">ToDo List</h1>
                    <input 
                        className="rounded-lg w-full h-10 pl-2 pr-2 border-black border bg-white text-black dark:bg-white dark:text-black"
                        onChange={ e => setSearchInput(e.target.value) }
                        placeholder="검색어 입력" />
                    {
                        todosQuery.isPending && <p>Loading...</p>
                    }
                    {
                        todosQuery.data && todosQuery.data.map((todo) => <ToDo key={todo.id} todo={todo} />)
                    }
                    <button
                        className="my-10 border p-2 rounded-lg border-black dark:border-white" 
                        onClick={ () => createToDoMutation.mutate() } >
                    {
                            createToDoMutation.isPending ?
                            <p>Loading...</p> :
                            <i className="fas fa-plus mr-2"> Add ToDo</i>
                    }
                    </button>
                </div>

            </div>
        </div>
    );
};
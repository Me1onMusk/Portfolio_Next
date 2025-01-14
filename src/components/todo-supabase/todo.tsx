
import { deleteToDo, updateToDo } from "@/app/actions/todo-actions";
import { queryClient } from "@/config/ReactQueryClientProvider";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function ToDo({ todo }) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ completed, setCompleted ] = useState(todo.completed);
    const [ title, setTitle ] = useState(todo.title);

    const updateToDoMutation = useMutation({
        mutationFn: () => updateToDo({
            id: todo.id,
            title,
            completed
        }),
        onSuccess: () => {
            setIsEditing(false)
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    });

    const deleteToDoMutation = useMutation({
        mutationFn: () => deleteToDo(todo.id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    });

    return (
        <div className = "w-full flex items-center gap-2 p-5 pb-0">
            <input
                className = "w-6 h-6 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-60 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type = "checkbox"
                checked = { completed }
                onChange = { async(e) => { 
                    await setCompleted(e.target.checked)
                    await updateToDoMutation.mutate()
                }} />
            {
                isEditing ? 
                (
                    <div className="w-full flex">
                        <input 
                            value={title} 
                            onChange={ e => setTitle(e.target.value) }
                            className="flex-1 ml-1 pl-2 text-black  border-b-black pb-1 mr-10 rounded-lg dark:bg-slate-800 dark:text-white border border-black dark:border-white" /> 
                        <button
                            className="rounded-lg p-2"
                            onClick={ async() => {
                                await setIsEditing(false)
                                await updateToDoMutation.mutate()
                            } }>
                            {
                                updateToDoMutation.isPending ?
                                <p>Loading...</p> :
                                <i className="fas fa-check" />
                            }
                        </button>
                    </div>
                ) : 
                (
                    <div className="w-full flex items-center">
                        <p className={`flex-1 ${completed && 'line-through'}`}>{title}</p>
                        <button
                            className="rounded-lg p-2"
                            onClick={ () => setIsEditing(true) }>
                            <i className="fas fa-pen" />
                        </button> 
                    </div> 
                )
            }
            <button
                className="rounded-lg p-2"
                onClick={ () => deleteToDoMutation.mutate() }>
                {
                    deleteToDoMutation.isPending ? 
                    <p>Loading...</p> : 
                    <i className="fas fa-trash" />
                }
            </button>
        </div>
    );
}; 


'use client';

import Editor from "@/components/todo/Editor";
import Header from "@/components/todo/Header";
import List from "@/components/todo/List";
import { useCallback, useReducer, useRef } from "react";

// Mock 데이터 // 
const mockData = [
    { 
        id: 0,
        isDone: false,
        content: "할일1...",
        date: new Date().toLocaleDateString('ko-KR')
    },
    {
        id: 1,
        isDone: false,
        content: "할일2...",
        date: new Date().toLocaleDateString('ko-KR')
    },
    {
        id: 2,
        isDone: false,
        content: "할일3...",
        date: new Date().toLocaleDateString('ko-KR')
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) => item.id === action.targetID ? {...item, isDone: !item.isDone} : item);
        case "DELETE":
            return state.filter((item) => item.id !== action.targetID);
        default: 
            return state;
    }
};

export default function Page() {

    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => { 
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().toLocaleDateString()
            }
        });
    }, []);

    const onUpdate = useCallback((targetID) => {
        dispatch({
            type: "UPDATE",
            targetID: targetID
        });
    }, []);

    const onDelete = useCallback((targetID) => {    
        dispatch({
            type: "DELETE",
            targetID: targetID
        });
    }, []);

    return (
        <div>
            <Header />
            <Editor onCreate = { onCreate } />
            <List todos = { todos } onUpdate={ onUpdate } onDelete={ onDelete } />
        </div>
    );
};
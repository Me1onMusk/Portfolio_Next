
'use client';

import { createContext, useEffect, useReducer, useRef, useState } from "react"; 

// Context //
export const DiaryStateContext = createContext(null);     //변하지 않는 속성 
export const DiaryDispatchContext = createContext(null);  //변하는 속성 

function reducer(state, action) {
    let nextState;

    switch(action.type) {
        case "INIT": return action.data;
        case "CREATE": {
            nextState = [action.data, ...state];
            break;
        }
        case "UPDATE": {
            nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
            break;
        }
        case "DELETE": {
            nextState = state.filter((item) => String(item.id) !== String(action.id));
            break;
        }
        default: return state;
    }

    localStorage.setItem ("diary", JSON.stringify(nextState));  //로컬 저장소에 데이터 저장 
    return nextState;
};

export default function Page({children}: Readonly<{children: React.ReactNode;}>) {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ data, dispatch ] = useReducer(reducer, []); 
    const idRef = useRef(0); 

    useEffect(() => {
        const storedData = localStorage.getItem("diary"); 
        if(!storedData) {
            setIsLoading(false);
            return;
        }
        const parsedData = JSON.parse(storedData); 
        if(!Array.isArray(parsedData)) {
            setIsLoading(false);
            return; 
        }
        let maxID = 0; 
        parsedData.forEach((item) => {
            if(Number(item.id) > maxID)
                maxID = Number(item.id);
        });
        idRef.current = maxID + 1;
        dispatch({
            type: "INIT",
            data: parsedData
        });
        setIsLoading(false);
    }, []);

    // 새로운 일기 추가 
    const onCreate = (createdDate, emotionID, content) => {
        //액션 
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++, 
                createdDate, 
                emotionID, 
                content 
            }
        });
    };

    // 새로운 일기 수정
    const onUpdate = (id, createdDate, emotionID, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionID,
                content
            }
        });
    };

    // 기존 일기 삭제 
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id
        });
    };

    if(isLoading) return <div> 데이터 로딩중입니다...</div> 

    return (
        <>
        <DiaryStateContext.Provider value={ data }> 
            <DiaryDispatchContext.Provider value={ {onCreate, onUpdate, onDelete} }> 
                { children }
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
        </>
    );
};
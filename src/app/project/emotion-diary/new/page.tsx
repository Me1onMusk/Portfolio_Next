
'use client';

import Button from "@/components/diary/button";
import Editor from "@/components/diary/editor";
import EmotionItem from "@/components/diary/emotion-item";
import Header from "@/components/diary/header";
import { emotionList } from "@/utils/diary/constants";
import { getStringDate } from "@/utils/diary/getStringedDate";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { DiaryDispatchContext } from "../layout"; 
import usePageTitle from "@/app/hooks/usePageTitle"; 

export default function Page() { 
    
    const { onCreate } = useContext(DiaryDispatchContext);

    // 메타 타이틀 변경하기 // 
    usePageTitle("새 일기 쓰기");

    const router = useRouter(); 
    const [ input, setInput ] = useState({
        createdDate: new Date(),
        emotionID: 3,
        content: ""
    }); 

    // 생성 페이지 전송 //
    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(), 
            input.emotionID, 
            input.content
        ); 
        // nav('/', {replace: true});  //홈 이동 & 뒤로가기 방지
        router.push('/project/emotion-diary');  
    };

    return (
        <div className="container w-fit mx-auto p-20 flex flex-col items-center justify-center gap-2">  
            <Header 
                leftChild={ <Button text={'<뒤로 가기'} type={''} onClick={ () => router.back() } /> } 
                title={ '새 일기 쓰기' } 
                rightChild={ '' } > 
            </Header>   
            <Editor initData={''} onSubmit={ onSubmit } />
        </div>
    );
};
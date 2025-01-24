
'use client';

import Editor from "@/components/diary/editor";
import Header from "@/components/diary/header";
import Button from "@/components/diary/button";
import { useParams, useRouter } from "next/navigation";
import useDiary from "@/app/hooks/useDiary";
import { useContext } from "react";
import { DiaryDispatchContext } from "../layout";

export default function Page() { 

    const router = useRouter(); 
    const params = useParams(); //파라미터 가져오기 
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

    const curDiaryItem = useDiary(params.id);  //커스텀 훅 
    if (!curDiaryItem) return <div>데이터 로딩중</div>

    // 삭제 하기 //
    const onClickDelete = () => {
        if (window.confirm("일기를 삭제할까요?")) {            //윈도우 팝업창 (T/F 반환) 
            onDelete(params.id);            
            router.push('/project/diary');                     //홈 이동 & 뒤로가기 방지  
        } 
    }; 

    // 수정 페이지 전송 //
    const onSubmit = (input) => {
        if(window.confirm("일기를 수정할까요?")) {
            onUpdate(
                params.id, 
                input.createdDate.getTime(), 
                input.emotionID, 
                input.content
            );
            router.push('/project/diary');  
        };
    };

    return (
        <div className="container w-fit mx-auto p-20 flex flex-col items-center justify-center gap-2">  
            <Header 
                leftChild={ <Button text={'<뒤로 가기'} type={''} onClick={ () => router.back() } /> } 
                title={ '일기 수정하기' } 
                rightChild={ <Button onClick={ onClickDelete } text={"삭제하기"} type={"NEGATIVE"} /> } > 
            </Header>   
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};
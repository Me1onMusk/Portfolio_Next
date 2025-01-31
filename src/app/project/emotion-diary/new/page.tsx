
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
    };

    // 날짜 넣기 // 
    // const onChangeInput = (e) => { 
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     if(name === 'createdDate') 
    //         value = new Date(value); 
    //     setInput({
    //         ...input,
    //         [name] : value
    //     });
    // };

    return (
        <div className="container w-fit mx-auto p-20 flex flex-col items-center justify-center gap-2">  
            <Header 
                leftChild={ <Button text={'<뒤로 가기'} type={''} onClick={ () => router.back() } /> } 
                title={ '새 일기 쓰기' } 
                rightChild={ '' } > 
            </Header>   
            <Editor initData={''} onSubmit={ onSubmit } />
            {/* <section className="flex w-full flex-col mb-10 gap-5 justify-center"> 
                <h4 className="flex font-bold text-2xl">오늘의 날짜</h4>
                <input 
                    className="flex"
                    name="createdDate" 
                    type="date"
                    value={ getStringDate(input.createdDate) } />
            </section>
            <section className="flex w-full flex-col justify-center mb-10">
                <h4 className="flex justify-start font-bold text-2xl">오늘의 감정</h4>
                <div className="flex">
                    {
                        emotionList.map((item) => 
                            <EmotionItem 
                                onClick={() => onChangeInput({
                                    target: {
                                        name: 'emotionID',
                                        value: item.emotionID
                                    }
                                })}  
                                key={ item.emotionID } 
                                {...item} 
                                isSelected={ item.emotionID === input.emotionID } />
                        )
                    }
                </div>
            </section>
            <section className="flex w-full flex-col justify-center mb-10 gap-5">
                <h4 className="font-bold text-2xl">오늘의 일기</h4> 
                <textarea 
                    className="min-h-80 min-w-80 dark:bg-white bg-slate-200 rounded-lg flex p-2"
                    name="content" 
                    value={ input.content } 
                    onChange={ onChangeInput } 
                    placeholder="오늘 어땠나요?" />
            </section>
            <section className="flex flex-row gap-5">
                <Button 
                    onClick={ () => router.back() }
                    text={'취소하기'} 
                    type={'NEGATIVE'} />
                <Button
                    onClick={ onClickSubmitButton } 
                    text={'작성완료'} 
                    type={'POSITIVE'} />
            </section> */}
        </div>
    );
};
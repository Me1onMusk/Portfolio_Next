
'use client';

import usePageTitle from "@/app/hooks/usePageTitle";
import Button from "@/components/diary/button";
import DiaryList from "@/components/diary/diary-list";
import Header from "@/components/diary/header";
import { useContext, useState } from "react";
import { DiaryStateContext } from "./DiaryProvider";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();  //12월 01일 00시 00분 00초 
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23, 59, 59).getTime();  //12월 31일 23시 59분 59초 

    // 메타 타이틀 변경하기 // 
    usePageTitle("감정 일기장");

    return (
        data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)
    );
};

export default function Page() {

    const data = useContext(DiaryStateContext); //App에 있는 MockData를 가져오기 
    const [ pivotDate, setPivotDate ] = useState(new Date()); 
    const monthlyData = getMonthlyData(pivotDate, data);

    const onIncreaseMonth = () => { setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1)); };
    const onDecreaseMonth = () => { setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1)); };

    return (
        <div className="container w-full mx-auto p-20 flex flex-col items-center justify-center">
            <div className="w-1/4">
                <Header 
                    leftChild={ <Button text={'<'} type={''} onClick={ onDecreaseMonth } /> } 
                    title={ `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월` } 
                    rightChild={ <Button text={'>'} type={''} onClick={ onIncreaseMonth } /> } > 
                </Header> 
                <DiaryList data={ monthlyData } /> 
            </div>
        </div>
    );
};
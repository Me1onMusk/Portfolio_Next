
'use client'; 

import { useState } from "react";
import Button from "./button"; 
import DiaryItem from "./diary-item"; 
import Link from "next/link"; 

export default function DiaryList({ data }) { 
    const [ sortType, setSortType ] = useState("latest"); 
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if(sortType === 'oldest') return Number(a.createdDate) - Number(b.createdDate);
            else return Number(b.createdDate) - Number(a.createdDate);
        });  //복사본 정렬 
    };

    const sortedData = getSortedData();

    return(
        <div className="flex flex-col items-center"> 
            <div className="flex mt-5 mb-5 gap-5"> 
                <select className="border rounded-lg">
                    <option>최신순</option>
                    <option>오래된 순</option>
                </select> 
                <Link href={'/project/diary/new'}> 
                    <Button 
                        onClick={ () => {} }
                        text={'새로운 일기쓰기'}
                        type={'POSITIVE'} /> 
                </Link>
            </div> 
            <div> 
                { sortedData.map((item) => <DiaryItem key={item.id} {...item} />) }
            </div> 
        </div>
    );
};


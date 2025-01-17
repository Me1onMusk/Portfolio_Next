
'use client'; 

import Button from "./button"; 
import DiaryItem from "./diary-item"; 
import Link from "next/link"; 

export default function DiaryList() { 
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
                <DiaryItem /> 
            </div> 
        </div>
    );
};


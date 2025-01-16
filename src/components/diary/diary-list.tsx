
'use client';

import Button from "./button";

export default function DiaryList() {
    return(
        <div className=" flex justify-center items-center">
            <div>
                <select>
                    <option>최신순</option>
                    <option>오래된 순</option>
                </select>
                <Button 
                    onClick={() => {}}
                    text={'새로운 일기쓰기'}
                    type={'POSITIVE'} />
            </div>
            <div>
                
            </div>
        </div>
    );
};
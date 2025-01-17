
'use client';

import Button from "@/components/diary/button";
import DiaryList from "@/components/diary/diary-list";
import Header from "@/components/diary/header";

export default function Page() {

    const onClick = () => {
        
    };

    return (
        <div className="container w-full mx-auto p-20 flex flex-col items-center justify-center">
            <div>
                <Header 
                    leftChild={<Button text={'<'} type={''} onClick={onClick} />} 
                    title={new Date().toLocaleDateString()} 
                    rightChild={<Button text={'>'} type={''} onClick={onClick} />} > 
                </Header>
                <DiaryList />
            </div>
        </div>
    );
};

'use client';

import Button from "@/components/diary/button";
import DiaryList from "@/components/diary/diary-list";
import Header from "@/components/diary/header";

export default function Page() {

    const onClick = () => {

    };

    return (
        <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="container">
                <Header 
                    leftChild={<Button text={'<'} type={''} onClick={onClick} />}
                    title={'연도'}
                    rightChild={<Button text={'>'} type={''} onClick={onClick} />}>
                </Header>
                <DiaryList />
            </div>
        </div>
    );
};

'use client';

import Button from "@/components/diary/button";

export default function Page() {
    return (
        <div className="container w-full mx-auto p-20 flex flex-col items-center justify-center">
            <section>
                <h4>오늘의 날짜</h4>
                <input />
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div>

                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <textarea />
            </section>
            <section>
                <Button 
                    onClick={() => {}}
                    text={'취소하기'} 
                    type={'NEGATIVE'} />
                <Button
                    onClick={() => {}} 
                    text={'작성완료'} 
                    type={'POSITIVE'} />
            </section>
        </div>
    );
};
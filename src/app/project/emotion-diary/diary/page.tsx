
'use client';

import useDiary from "@/app/hooks/useDiary";
import usePageTitle from "@/app/hooks/usePageTitle"; 
import Button from "@/components/diary/button";
import Header from "@/components/diary/header";
import Viewer from "@/components/diary/viewer";
import { getStringDate } from "@/utils/diary/getStringedDate";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const params = useParams(); 

    // 메타 타이틀 변경하기 // 
    usePageTitle(`${params.id}번 일기`);

    const curDiaryItem = useDiary(params.id);
    if (!curDiaryItem) return <div>데이터 로딩중</div>
    
    const { createdDate, emotionID, content } = curDiaryItem;
    const title = getStringDate(new Date(createdDate));

    return(
        <div>
            <Header 
                leftChild={ <Button text={ "< 뒤로가기" } type={''} onClick={ router.push('/emotion-diary') }/> } 
                title={ `${title}-기록` } 
                rightChild={ <Button text={ "수정하기" } type={''} onClick={ router.push(`/emotion-diary/edit/${params.id}`) } />} 
            /> 
            <Viewer emotionID={ emotionID } content={ content } />
        </div>
    );
};

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DiaryStateContext } from "../project/emotion-diary/DiaryProvider";

export default function useDiary(id) {

    const router = useRouter(); 
    const data = useContext(DiaryStateContext);  //데이터 가져오기 
    const [ curDiaryItem, setCurDiaryItem ] = useState();
    
    // 현재 일기 가져오기 (먼저 실행!!) // 
    useEffect(()=> {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));
        
        if(!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다."); 
            router.push('/project/diary');  //홈 이동 & 뒤로가기 방지
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]);

    return curDiaryItem;
};
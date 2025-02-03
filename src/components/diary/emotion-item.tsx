
import { getEmotionImage } from '../../utils/diary/get-emotion-image';

export default function EmotionItem({ emotionID, emotionName, isSelected, onClick }) {
  // 감정 ID에 따른 Tailwind 클래스 맵
    const emotionColorMap = {
        1: "bg-[#64c964] dark:bg-[#64c964] text-white",  // .EmotionItem_on_1
        2: "bg-[#9dd772] dark:bg-[#9dd772] text-white",  // .EmotionItem_on_2
        3: "bg-[#fdce17] dark:bg-[#fdce17] text-white",  // .EmotionItem_on_3
        4: "bg-[#fd8446] dark:bg-[#fd8446] text-white",  // .EmotionItem_on_4
        5: "bg-[#fd565f] dark:bg-[#fd565f] text-white",  // .EmotionItem_on_5
    };

    // isSelected === true 면 EmotionItem_on_x 스타일, 아니면 기본 스타일
    const containerClasses = isSelected
        ? emotionColorMap[emotionID] // 선택된 상태 → on_x 스타일
        : "bg-[#ffffff]";            // 기본(선택되지 않은) 상태

    return (
        <div
            className={`
                ${containerClasses} 
                flex flex-col m-5 gap-2 justify-center items-center bg-white dark:bg-slate-800
                rounded-3xl
                p-2
                cursor-pointer 
                text-center`}
            onClick={ onClick } >
            <img 
                className="h-20"
                src={ getEmotionImage(emotionID).src } />
            <div
                className="">
                { emotionName }
            </div>
        </div>
    ); 
};
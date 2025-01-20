
import { getEmotionImage } from '../../utils/diary/get-emotion-image';

export default function EmotionItem({ emotionID, emotionName, isSelected, onClick }) {
    return (
        <div
            onClick={onClick} 
            className="flex flex-col m-5 gap-2 justify-center items-center bg-white dark:bg-slate-800 rounded-lg" >
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

import { getEmotionImage } from "@/utils/diary/get-emotion-image"; 
import Button from "./button"; 
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DiaryItem({ id, createdDate, emotionID, content }) {

    const router = useRouter();

    return( 
        <div className="flex gap-10 justify-center items-center rounded-lg pb-5"> 
            <div
                onClick={ () => router.push(`/project/emotion-diary/${id}`) } 
                className=""> 
                <img 
                    className="h-20"
                    src={ getEmotionImage(emotionID).src } />
            </div> 
            <div 
                onClick={ () => router.push(`/project/emotion-diary/edit/${id}`) }
                className='flex flex-col'>
                <div className="pb-2">
                    { new Date(createdDate).toLocaleDateString() }
                </div>
                <div>
                    { content }
                </div>
            </div> 
            <div> 
                <Button 
                    onClick={ () => router.push(`/project/emotion-diary/edit/${id}`) }
                    text={ '수정하기' } 
                    type={''} />
            </div>
        </div>
    ); 
}; 
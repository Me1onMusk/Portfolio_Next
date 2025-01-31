
import { getEmotionImage } from "@/utils/diary/get-emotion-image"; 
import Button from "./button"; 
import Link from "next/link"; 
import { useRouter } from "next/navigation";

export default function DiaryItem({ id, createdDate, emotionID, content }) {

    const router = useRouter();

    return( 
        <div className="flex gap-14 justify-center border items-center rounded-lg"> 
            <div className=""> 
                <img 
                    className="h-20"
                    src={ getEmotionImage(1).src } />
            </div> 
            <div 
                onClick={ () => router.push(`/project/diary/${id}`) }
                className=''>
                <div className="">
                    { new Date(createdDate).toLocaleDateString() }
                </div>
                <div>
                    { content }
                </div>
            </div> 
            <div> 
                <Link href={`/project/emotion-diary/edit/${id}`}>
                    <Button 
                        onClick={ () => {} }
                        text={ '수정하기' } 
                        type={''} />
                </Link>
            </div>
        </div>
    ); 
}; 
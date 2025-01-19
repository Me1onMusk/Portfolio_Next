
import { getEmotionImage } from "@/utils/diary/get-emotion-image"; 
import Button from "./button"; 
import Link from "next/link";

export default function DiaryItem() {
    return( 
        <div className="flex gap-14 justify-center border items-center rounded-lg"> 
            <div className=""> 
                <img 
                    className="h-20"
                    src={getEmotionImage(1).src} />
            </div> 
            <div
                onClick={ () => {} }
                className=''>
                <div className="">
                    { new Date().toLocaleDateString() }
                </div>
                <div>
                    {}
                </div>
            </div>
            <div> 
                <Link href={'/project/diary/edit'}>
                    <Button 
                        onClick={ () => {}} 
                        text={'수정하기'} 
                        type={''} />
                </Link>
            </div>
        </div>
    ); 
}; 

import { emotionList } from "@/utils/diary/constants"; 
import { getEmotionImage } from "@/utils/diary/get-emotion-image";

export default function Viewer({ emotionID, content }) {

    const emotionItem = emotionList.find((item)=> 
        String(item.emotionID) === String(emotionID)
    );

    return(
        <div>
            <section>
                <h4>오늘의 감정</h4>
                <div>
                    <img src={ getEmotionImage(emotionID).src } />
                    <h4>{ emotionItem.emotionName }</h4>
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div>
                    <p>{ content }</p> 
                </div>
            </section>
        </div>
    );
};



import { getRandomImage } from "@/utils/instagram/random";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";

TimeAgo.addDefaultLocale(ko);
const timeAgo = new TimeAgo('ko-KR');

export default function Person({ 
    index,
    userId,
    name,
    onlineAt,
    isActive = false,
    onChatScreen = false,
    onClick = null
 }) {
    return(
        <div>
            <img 
                src={getRandomImage(index)} />
            <div>

            </div>
        </div>
    );
};
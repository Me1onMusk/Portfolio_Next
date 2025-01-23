
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
        <div 
            className={`flex items-center p-4 gap-5 w-full min-w-60 
                ${onClick && 'cursor-pointer'}
                ${!onChatScreen && isActive && 'bg-blue-100'}
                ${!onChatScreen && !isActive && 'bg-gray-50'}  
                ${onChatScreen && 'bg-gray-50'} `} 
                onClick={ onClick }> 
            <img
                src={ getRandomImage(index) } 
                alt={name} 
                className="w-10 h-10 rounded-full" />
            <div>
                <p className="text-black font-bold text-lg">{name}</p>
                <p className="text-gray-500 text-sm"> 
                { onlineAt && timeAgo.format(Date.parse(onlineAt)) }
                </p>
            </div> 
        </div>
    );
};
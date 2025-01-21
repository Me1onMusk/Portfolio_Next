
import { getRandomImage } from "@/utils/instagram/random";

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
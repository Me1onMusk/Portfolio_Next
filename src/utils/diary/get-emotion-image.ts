
import emotion1 from '../../app/assets/emotion1.png';
import emotion2 from '../../app/assets/emotion2.png';
import emotion3 from '../../app/assets/emotion3.png';
import emotion4 from '../../app/assets/emotion4.png';
import emotion5 from '../../app/assets/emotion5.png';

export function getEmotionImage(emotionID: number) {
    switch(emotionID) {
        case 1: return emotion1;
        case 2: return emotion2;
        case 3: return emotion3;
        case 4: return emotion4;
        case 5: return emotion5;
        default: return null;      
    }
};
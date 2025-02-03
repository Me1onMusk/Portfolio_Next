
import { memo } from "react";

const Header = () => {

    const t = new Date();
    const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]; 
    const day = days[t.getDay()];

    return(
        <div
            className="w-full flex items-center justify-center text-2xl p-5 m-5">
            <h3>오늘은 📆</h3>
            <h1 className="font-bold">{ t.getFullYear()+"년 " + (t.getMonth()+1)+"월 " + t.getDate()+"일 " + day }</h1> 
        </div>
    );
};

export default memo(Header);

import Hero_Anim from "./hero_anim";
import Hero_Main from "./hero_main";

import dynamic from 'next/dynamic';

// const DynamicHeroAnim = dynamic(() => import('./hero_anim'), {
//     ssr: false, //서버 사이드 렌더링 비활성화
// });

export default function Hero() {
    return (
        <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
                <Hero_Main />
                <Hero_Anim />
            </div>
        </section>
        </>
    );
};


'use client';

import { useRouter } from "next/navigation";

export default function Hero_Main() {
    const route = useRouter();
    const onClickButton = () => {
        route.push('/project');
    };
    
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-900 dark:text-white">안녕하세요! 😊
                    <br className="hidden lg:inline-block" />코드📄로 세상을 바꾸고 싶은 
                    <br className="hidden lg:inline-block" />웹 개발자🧑‍💻 <span className="font-serif text-purple-500 dark:text-purple-300">김태영</span> 입니다. 
                </h1>
                <p className="mb-8 leading-relaxed text-slate-500 dark:text-slate-400">
                    저에게 주어진 일에 최선을 다하며 맡겨진 임무를 완수하겠습니다!
                </p>
                <div className="flex justify-center">
                    <button 
                        className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                        onClick={ onClickButton }>
                        프로젝트 보기
                    </button>
                </div>
            </div>
        </>
    );
};
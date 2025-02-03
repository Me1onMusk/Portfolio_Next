
'use client';

export default function Page() {
    return (
        <div className="mb-24">
            <div className="container mx-auto flex px-5 py-40 pb-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-slate-900 dark:text-white">소개</h1>
                        <div className="h-1 w-16 bg-yellow-500 rounded"></div>
                    </div>
                    
                </div>
            </div>
            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-23 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg 
                                        fill="none" stroke="currentColor" strokeLinecap="round" 
                                        strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                            
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-slate-900 dark:text-white text-lg">김태영</h2>
                                    <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-slate-500 dark:text-slate-400">
                                        맡은 일에 최선을 다하고 맡은 일에 책임지는 개발자가 되고 싶습니다.
                                    </p>
                                </div>

                            </div>

                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4 text-slate-500 dark:text-slate-400">
                                    - 대일고등학교 졸업 <br/> 
                                    - 대한민국 공군 병장 만기전역 <br/> 
                                    - 대학교 소프트웨어학과 전공 & AI 부전공 <br/> 
                                    - 프론트엔드 개발자 인턴 <br/> 
                                    &nbsp; 회사 홈페이지 유지 보수 및 Next.js로 변환 작업 <br/>
                                    &nbsp; TypeScript | React | Next.js | Node.js | Tailwind.CSS 사용 <br/>
                                    &nbsp; 팀원간 Github 협업 | Notion 사용
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
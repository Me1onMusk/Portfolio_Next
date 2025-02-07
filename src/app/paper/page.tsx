
'use client';

import Image from "next/image";

export default function Page() {
    return (
        <div>
            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-slate-900 dark:text-white">수료증</h1>
                            <div className="h-1 w-24 bg-pink-500 rounded"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4 pb-20">

                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image 
                                    className="object-cover w-full h-40"
                                    src={ '/img_papers/react.png' }
                                    width={ 720 }
                                    height={ 400 }
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">인프런</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">리액트</h2>
                                <p className="leading-relaxed text-base">
                                    한입 크기로 잘라먹는 리액트
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                    className="object-cover w-full h-40"
                                    src={ '/img_papers/js.png' }
                                    width={ 720 }
                                    height={ 400 }
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">네이버 부스트코스</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">자바스크립트</h2>
                                <p className="leading-relaxed text-base">
                                    자바스크립트의 시작
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                    className="object-cover w-full h-40"
                                    src={ '/img_papers/github.png' }
                                    width={ 720 }
                                    height={ 400 }
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">네이버 부스트코스</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">깃허브</h2>
                                <p className="leading-relaxed text-base">
                                    Github으로 따라하는 버전 관리
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                    className="object-cover w-full h-40"
                                    src={'/img_papers/cs.png'}
                                    width={720}
                                    height={400}
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">네이버 부스트코스</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">자료구조+운영체재</h2>
                                <p className="leading-relaxed text-base">
                                    모두를 위한 컴퓨터 과학
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4 pb-20">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                    className="object-cover w-full h-40"
                                    src={'/img_papers/clone.png'}
                                    width={720}
                                    height={400}
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">인프런</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">Next 프로젝트 클론 코딩</h2>
                                <p className="leading-relaxed text-base">
                                    Supabase로 웹사이트 3개 클론하기 Next.js 14
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                    className="object-cover w-full h-40"
                                    src={'/img_papers/next.png'}
                                    width={720}
                                    height={400}
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">인프런</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">넥스트 JS</h2>
                                <p className="leading-relaxed text-base">
                                    한입 크기로 잘라먹는 넥스트 Next.js 15
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                    className="object-cover w-full h-40"
                                    src={'/img_papers/java01.png'}
                                    width={720}
                                    height={400}
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">네이버 부스트코스</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">자바</h2>
                                <p className="leading-relaxed text-base">
                                    쉽게 배우는 자바
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                    className="object-cover w-full h-40"
                                    src={'/img_papers/springboot.png'}
                                    width={720}
                                    height={400}
                                    alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">패스트캠퍼스</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">Springboot</h2>
                                <p className="leading-relaxed text-base">
                                    Java & Springboot로 시작하는 웹 프로그래밍 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="h-1 w-25 bg-pink-500 rounded"></div>       
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-23 pb-20 mx-auto"> 

                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-slate-900 dark:text-white">자격증</h1>
                            <div className="h-1 w-20 bg-pink-500 rounded"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <Image
                                        className="object-cover w-full h-40"
                                        src={'/img_papers/sqld.png'}
                                        width={720}
                                        height={400}
                                        alt="react" />
                                <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">한국 데이터산업진흥원</h3>
                                <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">SQLD</h2>
                                <p className="leading-relaxed text-base">
                                    SQL 개발자
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                            <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">한국 정보통신자격협회</h3>
                            <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">네트워크 관리사 2급 (필기)</h2>
                            <p className="leading-relaxed text-base">실기 시험 중입니다.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                            <h3 className="tracking-widest text-pink-500 dark:text-pink-500 text-xs font-medium title-font">한국 산업인력공단</h3>
                            <h2 className="text-lg text-gray-900 dark:text-gray-900 font-medium title-font mb-4">정보처리기사 (필기)</h2>
                            <p className="leading-relaxed text-base">실기시험 중입니다.</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>

        </div>
    );
};
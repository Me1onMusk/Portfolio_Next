
'use client';

import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            
            <div className="container mx-auto flex px-5 py-24 pb-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-slate-900 dark:text-white">프로젝트</h1>
                        <div className="h-1 w-28 bg-green-500 rounded"></div>
                    </div>
                    
                </div>
            </div>
            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src="/img_project/books.png" 
                                    width={720}
                                    height={400}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-900 dark:text-white mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-slate-900 dark:text-white mb-3">책 검색</h1>
                                    <p className="leading-relaxed mb-3 text-slate-500 dark:text-slate-400">
                                        사용언어 : Next | 타입스크립트 <br />
                                        사용기술 : 백엔드 서버 API
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href={'/project/bookstore'}>보러가기
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src="/img_project/diary.png" 
                                    width={720}
                                    height={400}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-slate-900 dark:text-white mb-3">감성 일기장</h1>
                                    <p className="leading-relaxed mb-3 text-slate-500 dark:text-slate-400">
                                        사용언어 : Next | 타입스크립트 <br />
                                        사용기술 : 백엔드 서버 API
                                    </p>
                                    <div className="flex items-center flex-wrap">
                                        <Link className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href={'/project/diary'}>보러가기</Link>
                                        <a>
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src="/img_project/todo.png" 
                                    width={720}
                                    height={400}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-slate-900 dark:text-white mb-3">투두 리스트 (on browser)</h1>
                                    <p className="leading-relaxed mb-3 text-slate-500 dark:text-slate-400">
                                        사용언어 : Next | 타입스크립트 <br />
                                        사용기술 : 백엔드 서버 API
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href={'/project/todo'}>보러가기</Link>
                                        <a>
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
                
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-23 pb-16 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src="/img_project/netflix.jpg" 
                                    width={700}
                                    height={400}
                                    alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                <h1 className="title-font text-lg font-medium text-slate-900 dark:text-white mb-3">넷플릭스</h1>
                                <p className="leading-relaxed mb-3 text-slate-500 dark:text-slate-400">
                                    사용언어 : Next | 타입스크립트 <br />
                                    사용기술 : Supabase DB, 무한 스크롤
                                </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href={'/project/netflix'}>보러가기</Link>
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src="/img_project/instagram.jpg" 
                                    width={720}
                                    height={400}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-slate-900 dark:text-white mb-3">인스타그램</h1>
                                    <p className="leading-relaxed mb-3 text-slate-500 dark:text-slate-400">
                                        사용언어 : Next | 타입스크립트 <br />
                                        사용기술 : Supabase 실시간 채팅 | Supabase Auth
                                    </p>
                                    <div className="flex items-center flex-wrap">
                                            <Link className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href={'/project/instagram'}>
                                                보러가기
                                            </Link>
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src="/img_project/dropbox.avif"  
                                    width={720}
                                    height={400}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-slate-900 dark:text-white mb-3">드롭박스</h1>
                                    <p className="leading-relaxed mb-3 text-slate-500 dark:text-slate-400">
                                        사용언어 : Next | 타입스크립트 <br />
                                        사용기술 : 백엔드 서버 API
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href={'/project/dropbox'}>
                                            보러가기
                                        </Link>
                                        <svg 
                                            className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" 
                                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                                    src="/img_project/todolist.png"  
                                    width={720}
                                    height={400}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-slate-900 dark:text-white mb-3">투두 리스트 (with supabase)</h1>
                                    <p className="leading-relaxed mb-3 text-slate-500 dark:text-slate-400">
                                        사용언어 : Next | 타입스크립트 <br />
                                        사용기술 : 백엔드 서버 API
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href={'/project/todo-supabase'}>
                                            보러가기
                                        </Link>
                                        <svg 
                                            className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" 
                                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>

        </div>
    );
};
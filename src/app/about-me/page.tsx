
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
                                        Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.
                                    </p>
                                </div>

                            </div>

                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4 text-slate-500 dark:text-slate-400">
                                    Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. 
                                    Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. 
                                    Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. 
                                    Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
                                </p>
                                <a className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg 
                                        fill="none" stroke="currentColor" strokeLinecap="round" 
                                        strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

import SearchBar from "@/components/bookstore/searchbar";
import Link from "next/link"; 
import { ReactNode } from "react";

export default function Page({children}: Readonly<{children: ReactNode; modal: ReactNode;}>) {

    function Header() {
        return(
            <header className='flex w-1/4 text-3xl font-bold justify-start items-center'>
                <Link href={'/project/bookstore'}>📚서점</Link>
            </header>
        );
    };

    function Footer() {
        return(
            <footer className="text-sm">
                <div>제작 @김태영</div>
                <div>0개의 도서가 등록되어 있습니다</div>
            </footer>
        );
    };

    return (
        <div className="container mx-auto flex flex-col items-center justify-center gap-5">
            <Header />
            <SearchBar />
            <main className="flex w-1/4 border">
                {children}
            </main>
            <Footer />
        </div>
    );
};
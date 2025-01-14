
import Link from "next/link"; 

export default function Page() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center">
            <header className='text-2xl'>
                <Link href={'/project/bookstore'}>📚OneBite Books</Link>
            </header>
            <main>
            
            </main>
            <footer className="text-sm">
                <div>제작 @김태영</div>
                <div>0개의 도서가 등록되어 있습니다</div>
            </footer>
        </div>
    );
};
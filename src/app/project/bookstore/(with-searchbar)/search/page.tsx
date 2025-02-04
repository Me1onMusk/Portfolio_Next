
import BookItem from '@/components/bookstore/book-item'; 
import { BookData } from '../../../../../../types'; 

async function SearchResult ({q}: {q :string}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`); 
    if(!response.ok) 
        return <div>오류가 발생했습니다...</div>  
    const books : BookData[] = await response.json(); 

    return (
        <div>
            { 
                books.map((book) => <BookItem key={book.id} {...book} />)
            }
        </div>
    );
};

// ~/search?q=단어 //
export default function Page({searchParams} : any) {
    return (    
        <>  
            <SearchResult q = {searchParams.q || ""} /> 
        </> 
    );
};
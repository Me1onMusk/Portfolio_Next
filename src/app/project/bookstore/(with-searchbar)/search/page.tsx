
import BookItem from '@/components/bookstore/book-item'; 
import { BookData } from '../../../../../../types'; 

interface PageProps {
    // Next.js에서는 searchParams가 기본적으로 string 또는 string[]일 수 있기 때문에
    // 필요하다면 아래처럼 좀 더 유연하게 작성할 수 있습니다.
    searchParams?: {
      q?: string; // 실제로는 q가 없을 수도 있고, 문자열 배열일 수도 있음
    };
  }

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
export default function Page({searchParams} : PageProps) {
    return (    
        <>  
            <SearchResult q = {searchParams.q || ""} /> 
        </> 
    );
};
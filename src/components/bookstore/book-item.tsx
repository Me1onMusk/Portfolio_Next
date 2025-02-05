
import { BookData } from '../../../types'; 
import Link from 'next/link';
// import style from './book-item.module.css';
import Image from 'next/image';

// 메인 > 북 아이템 // 
export default function BookItem({
    id,
    title,
    subTitle,
    author,
    publisher,
    coverImgUrl 
}:BookData) {
    return (
        <Link href={`http://localhost:3000/project/bookstore/book/${id}`} >
            <Image 
                src={ coverImgUrl }
                width={ 80 }
                height={ 105 }
                alt={ `도서 ${title}의 표지 이미지` } />
            <div>
                <div>{ title }</div>
                <div>{ subTitle }</div>
                <br />
                <div>
                    { author } | { publisher }
                </div>
            </div>
        </Link>
    );
};
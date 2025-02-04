
import { ReviewData } from '../../../types';
// import style from './review-item.module.css';
import ReviewItemDeleteButton from '../../components/bookstore/review-item-delete-button';

export default function ReviewItem({
    id,
    content,
    author,
    createdAt,
    bookId
}: ReviewData) {
    return (
        <div>
            <div>{author}</div>
            <div>{content}</div>
            <div>
                <div>{new Date(createdAt).toLocaleDateString()}</div>
                <div>
                    <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
                </div>
            </div>
        </div>
    );
};
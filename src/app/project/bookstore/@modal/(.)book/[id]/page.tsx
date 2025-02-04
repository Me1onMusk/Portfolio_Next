
import BookPage from '@/app/project/bookstore/book/[id]/page';
import Modal from '@/components/bookstore/modal';

export default function Page(props: any) {
    return(
        <Modal>
            <BookPage {...props} />
        </Modal>
    );
};
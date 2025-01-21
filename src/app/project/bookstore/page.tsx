


export default function Page() {

    // 메타 데이터 // 

    // 모든 책 출력 함수 // 
    async function AllBooks() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
    };

    // 추천 책 출력 함수 // 
    async function RecommandBooks() {

    };

    return (
        <div className="container flex-col items-center justify-center">
            <section> 
                <h3 className="flex justify-start text-xl">📖지금 추천하는 도서</h3> 
            </section>
            
            <section>
                <h3 className="flex justify-start text-xl">📖등록된 모든 도서</h3> 
            </section>
        </div>
    );
};
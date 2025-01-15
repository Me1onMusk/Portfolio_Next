
import Render from '@/components/notion/render';
import { NotionAPI } from 'notion-client';

interface fetchEachPagesProps {
    params: {
      pageId: string; // pageId 추출
    };
};

export default async function NotionPage({ params }: fetchEachPagesProps) {
    const notion = new NotionAPI();
    const { pageId } = await params;  // params를 비동기적으로 처리
 
    if (!pageId) {
        return <div>잘못된 페이지 ID입니다.</div>;
    }

    try {
            const recordMap = await notion.getPage(pageId); // 세부 페이지 데이터 가져오기
            
            return <Render recordMap={recordMap} />;  //데이터를 Render 컴포넌트에 전달
        } catch (error) {
            console.error(error);
            return <div>페이지를 불러오는 데 오류가 발생했습니다.</div>;
        }
};
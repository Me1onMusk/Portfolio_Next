
import Render from '@/components/notion/render';
import { NotionAPI } from 'notion-client';

interface fetchEachPagesProps {
    params: {
      pageId: string; // pageId 추출
      lng: string;
    };
};

export default async  function NotionPage({ params: { pageId, lng } }: fetchEachPagesProps) {
    const notion = new NotionAPI();
    try {
        const recordMap = await notion.getPage(pageId); // 세부 페이지 데이터 가져오기
        return (
            <>
                <Render recordMap={recordMap} />
            </>
        );
      } catch (error) {
        return console.error(error);
      }
};
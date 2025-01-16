
import Render from '@/components/notion/render';
import { NotionAPI } from 'notion-client';

export default async function Page() {

    const notion = new NotionAPI();
    
    if (!process.env.NOTION_DATABASE_ID) {
        throw new Error('데이터베이스 아이디가 없습니다.');
    } else {
        try {
            const recordMap = await notion.getPage(process.env.NOTION_DATABASE_ID);

            return (
                <div>
                    <Render recordMap={recordMap} />
                </div>
            );
        } catch(error) {
            return console.error(error);
        }
    };
};
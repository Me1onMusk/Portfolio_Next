
import Render from '@/components/notion/render';
import { NotionAPI } from 'notion-client';
import { notionDatabase } from '../../utils/notion/notion';
import { getData } from '../../utils/notion/notion';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

const pageId = '17c962598a8d8088b238d4175b1d2509';

export default async function Page() {

    const notion = new NotionAPI();
    const data = await getData(pageId);
    const recordMap = await notion.getPage(pageId);

    if (!process.env.NOTION_DATABASE_ID) {
        throw new Error('데이터베이스 아이디가 없습니다.');
    };

    return (
        <div>
            <Render recordMap={recordMap} />
        </div>
    );
};


import Render from '@/components/notion/render';
import { NotionAPI } from 'notion-client';

import "react-notion-x/src/styles.css";       //기본 스타일
import styles from '../../../styles/NotionPage.module.css'; //스크롤 제거 스타일

import 'react-notion-x/src/styles.css';  //notion 테마 스타일링 (필수)
import 'prismjs/themes/prism-tomorrow.css';    //코드 하이라이트 스타일용 (선택)
import 'katex/dist/katex.min.css';  //공식등 수학적 기호 스타일용 (선택)

export default async function Page() {

    const notion = new NotionAPI();
    
    if (!process.env.NOTION_DATABASE_ID) {
        throw new Error('데이터베이스 아이디가 없습니다.');
    } else {
        try {
            const recordMap = await notion.getPage(process.env.NOTION_DATABASE_ID);
            return (
                <div className={styles.notion}>
                    <Render recordMap={recordMap} />
                </div>
            );
        } catch(error) {
            return console.error(error);
        }
    };

};
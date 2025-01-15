
import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';
 
export const notion = new NotionAPI();
 
export async function getData(rootPageId: string) {
    return await notion.getPage(rootPageId);
};

export const notionDatabase = new Client({
    auth: process.env.NOTION_SECRET,
});

const notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
});

export async function getPosts() {
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [
            {
                property: "period",      // 정렬의 기준이 될 데이터베이스 속성
                direction: "descending", // 내림차순 : descending, 오름차순 : ascending 
            }
      ],
    });
  
    return response.results;
};
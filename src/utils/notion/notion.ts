
import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';
 
export const notionAPI = new NotionAPI();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
});

export async function getPosts() {
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [
            {
                property: "period",      
                direction: "descending", 
            }
      ],
    });
  
    return response.results;
};

// 데이터베이스 목록 가져오기
export async function getDatabase(databaseId: string) {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
};
  
  // 특정 페이지 블록 데이터 가져오기
  export async function getPageBlocks(pageId: string) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });
    return response.results;
};
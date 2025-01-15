
import { GetStaticPaths, GetStaticProps } from 'next';
import { NotionRenderer } from 'react-notion-x';
import { getDatabase, getPageBlocks } from '../../utils/notion/notion';

export default function NotionPage({ recordMap }: { recordMap: any }) {
  return (
    <div>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const items = await getDatabase(databaseId);

  return {
        paths: items.map((item) => ({
            params: { id: item.id },
        })),
        fallback: true, //없는 경로를 처리할 수 있도록 설정
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const pageId = context.params?.id as string;
    const recordMap = await getPageBlocks(pageId);

    return {
        props: { recordMap },
        revalidate: 10,
    };
};
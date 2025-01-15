
'use client';

import { NotionRenderer } from 'react-notion-x';

interface RendererProps {
    recordMap: any; 
};

export default function Render({ recordMap }: RendererProps) {

    if (!recordMap) {
        return <div>Loading...</div>;
    };

    return(
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <NotionRenderer
                    recordMap={recordMap}
                    fullPage={true}
                    darkMode={false}
                    previewImages />
            </div>
        </div>
    );
};
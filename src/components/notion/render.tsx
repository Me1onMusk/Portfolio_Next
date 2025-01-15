
'use client';

import { NotionRenderer } from 'react-notion-x';

import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import Image from "next/image";
import "react-notion-x/src/styles.css";       //기본 스타일

interface RendererProps {
    recordMap: any; 
    rootPageId: string;
};

export default function Render({ recordMap, rootPageId  }: RendererProps) {

    if (!recordMap) {
        return <div>Loading...</div>;
    };

    return(
        <div className="notion__container">
            <div className="container px-5 py-24 mx-auto border"> 
                <NotionRenderer
                    components={{
                        nextImage: Image,
                        Code: Code,
                        Collection: Collection,
                    }}
                    recordMap={recordMap}
                    fullPage={true}
                    darkMode={false}
                    rootPageId={rootPageId}
                    disableHeader
                    previewImages />
            </div>
        </div> 
    );
};
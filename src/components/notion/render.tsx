
'use client';

import { NotionRenderer } from 'react-notion-x';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from "next/image";
import { ExtendedRecordMap } from 'notion-types';
import "react-notion-x/src/styles.css";       //기본 스타일

interface NotionPageProps {
    recordMap: ExtendedRecordMap;
};

export default function Render({ recordMap }: NotionPageProps) {

    const Code = dynamic(
        () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
        { ssr: false },
    );
    const Collection = dynamic(
        () => import('react-notion-x/build/third-party/collection').then((m) => m.Collection),
        { ssr: false },
    );
    const Equation = dynamic(
        () => import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
        { ssr: false },
    );
    const Modal = dynamic(
        () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
        { ssr: false },
    )

    if (!recordMap)
        return <div>Loading...</div>;

    return(
        <div className="notion__container">
            <div className="container px-5 py-24 mx-auto border"> 
                <NotionRenderer
                    components={{
                        Code,
                        Collection,
                        Equation,
                        Modal,
                        nextImage: Image,
                        nextLink: Link,
                    }}
                    recordMap={recordMap}
                    fullPage={true}
                    darkMode={false}
                    disableHeader
                    previewImages />
            </div>
        </div> 
    );
};
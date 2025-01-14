
'use client';

import DropboxImageList from "@/components/dropbox/dropbox-image-list";
import FileDragDropZone from "@/components/dropbox/file-dragdropzone";
import Logo from "@/components/dropbox/logo";
import SearchComponent from "@/components/dropbox/search-component";
import { useState } from "react";

export default function Page() {

    const [ searchInput, setSearchInput ] = useState('');
    
    return (
        <div className="container mx-auto flex px-5 py-24 pb-5 md:flex-row flex-col items-center">
            <div className="flex-grow flex flex-col">
                <Logo />
                <SearchComponent />
                <FileDragDropZone />
                <DropboxImageList />
            </div>
        </div>
    );
};
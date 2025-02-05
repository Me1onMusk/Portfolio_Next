
'use client';

import { useQuery } from "@tanstack/react-query";
import DropboxImage from "./dropbox-image";
import { searchFiles } from "../../app/actions/storageActions";

export default function DropboxImageList({ searchInput }) {

    const searchImageQuery = useQuery({
        queryKey: ['images', searchInput],
        queryFn: () => searchFiles(searchInput)
    });

    return (
        <section className="w-2/3 ml-20 mb-10 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
            { searchImageQuery.isLoading && <p>Loading...</p> }
            { searchImageQuery.data && searchImageQuery.data.map(image => <DropboxImage key={image.id} image={image} />) }
        </section>
    );
};
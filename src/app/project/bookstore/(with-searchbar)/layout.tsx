
import { ReactNode } from "react"; 
import SearchBar from "@/components/bookstore/searchbar";

export default function Layout({children}:{children: ReactNode}) { 
    return (
        <div>
            <SearchBar />
            { children }
        </div>
    );
};
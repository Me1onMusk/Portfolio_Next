
'use client';

import { Home, People, Send, Search } from "@mui/icons-material";
import Link from "next/link";

export default function SideBar() {
    return(
        <div>
            <aside className="p-6 pt-20"> 
                <div className="flex flex-col gap-4 items-start">
                    <Link href={'/project/instagram'}> 
                        <Home className='text-2xl mb-10' />
                    </Link>
                    <Link href={'/project/instagram/people'}>
                        <People className='text-2xl' />
                    </Link>
                    <Link href={'/project/instagram/discover'}>
                        <Search className='text-2xl' />
                    </Link>
                    <Link href={'/project/instagram/chat'}>
                        <Send className='text-2xl' />
                    </Link>
                </div>
            </aside>
        </div>
    );
};
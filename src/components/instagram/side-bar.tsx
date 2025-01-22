
'use client';

import { Home, People, Send, Search } from "@mui/icons-material";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function SideBar() {

    const supabase = createBrowserSupabaseClient();

    return(
        <div>
            <aside className="p-6 pb-20 pt-20 flex w-fit"> 
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
            <div>
                <button
                    className="border rounded-lg p-2 bg-red-500 hover:bg-red-600  text-slate-100 border-none text-sm"
                    onClick={ () => { supabase.auth.signOut() } }>
                    로그아웃
                </button>
            </div>
        </div>
    );
};
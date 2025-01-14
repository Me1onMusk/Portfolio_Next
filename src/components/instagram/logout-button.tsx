
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function LogoutButton() {
    
    const supabase = createBrowserSupabaseClient();

    return (
        <Link href={'/project'}>
            <button 
                className="border rounded-lg p-2 bg-red-500 hover:bg-red-600  text-slate-100 border-none"
                onClick={async () => {
                    supabase.auth.signOut()
                }}>
                로그아웃
                <i className="fa-solid fa-right-from-bracket pl-2" />
            </button>
        </Link>
    );
};
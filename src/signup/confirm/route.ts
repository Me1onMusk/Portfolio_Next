
import { createServerSupabaseClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// localhost:3000/signup/confirm?code=...

export async function GET(request: Request) {
    const requetURL = new URL(request.url);  //요청 URL 
    const code = requetURL.searchParams.get('code');

    if(code) { //코드가 있으면 
        const supabase = await createServerSupabaseClient();
        await supabase.auth.exchangeCodeForSession(code);  //세션 받아오기 
    };
    
    return NextResponse.redirect(requetURL.origin);
};
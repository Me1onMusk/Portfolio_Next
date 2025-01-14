
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
    const { searchParams, origin, pathname } = new URL(request.url);  //요청 URL을 파싱하여 URL 객체를 생성합니다.
    const code = searchParams.get("code");  //카카오 로그인에서 받은 인증 코드를 추출합니다.
    const next = searchParams.get("next") ?? "/";  //로그인 성공 후 이동할 페이지를 나타내는 next 파라미터를 추출하고, 값이 없을 경우 기본값 /으로 설정합니다.

    console.log("카카오 테스트");
    console.log(`${pathname}`); // /auth/callback
    console.log(`${next}`);     // /
    console.log(`${origin}`);   // http://localhost:3000

    if (code) {
        const supabase = await createServerSupabaseClient(); 
        const { error } = await supabase.auth.exchangeCodeForSession(code);  

        if (!error)
            return NextResponse.redirect(`${origin}${next}`); 
    };

    return NextResponse.redirect(`${origin}/auth/auth-code-error`);  //실패 했을 경우 
};

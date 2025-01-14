
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const applyMiddlewareSupabaseClient = async (request: NextRequest) => {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        }
    });
  
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {

                    request.cookies.set({
                        name,
                        value,
                        ...options
                    });

                    response = NextResponse.next({
                        request: {
                            headers: request.headers
                        }
                    });
                    response.cookies.set({
                        name,
                        value,
                        ...options
                    });
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: "",
                        ...options
                    });

                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        }
                    });
                    response.cookies.set({
                        name,
                        value: "",
                        ...options
                    });
                }
            }
        }
    );
  
    await supabase.auth.getUser();
  
    return response;
  };
  
  export async function middleware(request) {
    return await applyMiddlewareSupabaseClient(request);
  }
  
  export const config = {
    matcher: [
      "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
  };
  
/*
    목적: Next.js 애플리케이션에서 요청 및 응답을 처리하고 Supabase 클라이언트를 적용하기 위한 미들웨어
    applyMiddlewareSupabaseClient()
        요청을 처리하며 Supabase 클라이언트를 생성하고, 쿠키를 관리합니다. 
        요청과 응답에 Supabase 클라이언트를 통합하고 인증 토큰을 갱신합니다.
    middleware()
        applyMiddlewareSupabaseClient()를 호출하여 미들웨어를 구현합니다. 
        특정 요청 경로에 대해 미들웨어가 동작하도록 설정합니다.
*/

"use client";

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

// 로그아웃시 화면 새로고침 구현 // 
export default function AuthProvider({ accessToken, children }) {

    const supabase = createBrowserSupabaseClient();  //Supabase 클라이언트를 브라우저 환경에서 생성
    const router = useRouter(); 

    //useEffect 훅: 컴포넌트가 마운트되거나 지정된 의존성이 변경될 때 실행 
    useEffect(() => {
        const {
            data: { 
                subscription: authListner 
            }
        } = supabase.auth.onAuthStateChange((event, session) => {  
                if (session?.access_token !== accessToken)  //새로운 세션의 access_token이 props로 전달된 accessToken과 다르면 페이지 새로고침
                    router.refresh();
            });

        //컴포넌트 언마운트 시 auth 상태 변경 리스너 해제 
        return (
            () => { 
                authListner.unsubscribe(); 
            }
        );
    }, [accessToken, supabase, router]); 

    return children;
};

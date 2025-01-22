
'use client';

import { useState } from "react";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { useMutation } from "@tanstack/react-query";

interface SignUpProps {
    setView: React.Dispatch<React.SetStateAction<string>>;
    path?: string;
};

// 회원 가입 //
export default function SignUp({ setView, path }: SignUpProps) {

    const supabase = createBrowserSupabaseClient();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ otp, setOtp ] = useState('');
    const [ confirmationReq, setConfirmReq ] = useState(false);  //이메일 전송후 재전송 하지 못하게 

    const signUpMutation = useMutation({
        mutationFn: (
            async () => {
                const { data, error } = await supabase
                    .auth
                    .signUp(
                        { 
                            email,
                            password, 
                            options: {  //로그인 성공 후 리다이렉트될 URL
                                emailRedirectTo: process.env.NEXT_PUBLIC_VERCEL_URL && (path === 'insta') ?
                                    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/project/instagram` : 
                                    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/auth`
                            }
                        }
                    )
                if(data) setConfirmReq(true);
                if(error) alert(error.message);
            }
        )
    });

    // 인증 메일 보내기 //
    const verifyOtpMutation = useMutation({
        mutationFn: (
            async() => {
                const { data, error } = await supabase
                    .auth
                    .verifyOtp({
                        type: 'signup',
                        email,
                        token: otp
                    })

                if(data) console.log(data); 
                if(error) alert(error.message);
            }
        )
    });

    return (
        <div className="flex flex-col">
            <div className="pt-10 pb-6 mb-5 px-10 w-full flex flex-col items-center justify-center dark:bg-slate-800
                max-w-lg border rounded-lg border-gray-400 bg-white gap-5"> 
                <img 
                    className="w-60 mb-6 dark:hidden"
                    src={'/logo/logo.png'} />
                <img 
                    className="w-60 mb-6 hidden dark:block"
                    src={'/logo/logo_white.png'} />  
                {
                    confirmationReq ?
                    (
                        <>
                            <input 
                                value={ otp }
                                className="w-full p-1 rounded-lg dark:bg-white border-black border text-black dark:text-black pl-2 overflow-hidden" 
                                placeholder="6자리 숫자를 입력해 주세요." 
                                onChange={ e => setOtp(e.target.value) }
                                type="number" />
                        </>
                    ) :
                    (
                        <>
                            <input
                                placeholder="이메일"
                                value={ email }
                                type="email" 
                                onChange={ e => setEmail(e.target.value) }
                                className="w-full p-1 rounded-lg dark:bg-white border-black border text-black dark:text-black pl-2"/>
                            <input
                                placeholder="비밀번호"
                                value={ password }
                                type="password" 
                                onChange={ e => setPassword(e.target.value) }
                                className="w-full p-1 rounded-lg dark:bg-white border-black border text-black dark:text-black pl-2" />
                        </>
                    )
                }
                <button 
                    className="w-full text-md text-white py-1 bg-green-500 hover:bg-green-600 rounded-lg"
                    color="light-blue"
                    onClick={() => {
                        if (confirmationReq) verifyOtpMutation.mutate();
                        else signUpMutation.mutate();
                    }}>
                    {
                        (confirmationReq ? verifyOtpMutation.isPending : signUpMutation.isPending) 
                        ? 'Loading...' 
                        : (confirmationReq ? "인증하기" : "가입하기") 
                    }
                </button>
                <div className="py-4 w-full text-center max-w-lg  bg-white dark:bg-slate-800 gap-5 rounded-lg">
                    이미 계정이 있으신가요?
                    <button 
                        className = "text-light-blue-600 font-bold pl-2"
                        onClick = { () => setView('SIGNIN') } >
                        <span className="hover:text-blue-600 dark:hover:text-blue-600 text-blue-500">로그인하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
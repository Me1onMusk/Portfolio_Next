
'use client';

import { useState } from "react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

interface AuthProps {
    path?: string; //반드시 전달받아야 할 문자열 타입 prop
};

const Auth: React.FC<AuthProps> = ({ path }) => { 

    const [ view, setView ] = useState("SIGNIN");

    return (
        <main 
            className="flex justify-center items-center mx-auto container px-5 py-32 md:flex-row">
            {
                view === 'SIGNIN' ? (<SignIn setView={setView} path={path} />) : (<SignUp setView={setView} />)
            }
        </main>
    );
};

export default Auth;
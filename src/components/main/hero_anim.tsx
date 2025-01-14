
'use client';

import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/anim/anim.json';

export default function Hero_Anim() {
    return (
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie
                loop
                animationData={lottieJson}
                play />
        </div>
    );
};
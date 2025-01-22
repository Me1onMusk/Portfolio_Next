
'use client';

export default function Message({ isFromMe, message }) {
    return(
        <div 
            className={ `w-fit p-2 rounded-lg ${isFromMe ? 'bg-blue-300 text-black ml-auto' : 'bg-gray-100 text-black'}` } > 
            <p>{ message }</p>
        </div>
    );
};
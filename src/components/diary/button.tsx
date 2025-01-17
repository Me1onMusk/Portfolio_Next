
'use client';

export default function Button({text, type, onClick}) {
    return(
        <button 
            onClick={onClick} 
            className={`border bg-blue-300 p-2 rounded-lg Button Button_${type}`}>
            {text}
        </button> 
    ); 
}; 
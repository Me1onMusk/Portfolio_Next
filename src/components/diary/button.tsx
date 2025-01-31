
'use client';

export default function Button({ text, type, onClick }) {
    return(
        <button 
            onClick={ onClick } 
            className={ `border p-2 rounded-lg ${type === 'NEGATIVE' ? "bg-red-300" : "bg-green-300" }`}>
            { text }
        </button> 
    ); 
}; 

'use client';

export default function Button({ text, type, onClick }) {
    return(
        <button 
            onClick={ onClick } 
            className={ `p-2 rounded-lg ${type === 'NEGATIVE' ? "bg-red-300 dark:text-black" : "bg-green-300 dark:text-black" }`}>
            { text }
        </button> 
    ); 
}; 
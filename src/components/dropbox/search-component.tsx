
'use client';

export default function SearchComponent({ searchInput, setSearchInput }) {
    return (
        <div className="w-2/6">
            <input 
                value={ searchInput }
                onChange={ e => setSearchInput(e.target.value) }
                placeholder="검색"
                className="border rounded-lg dark:bg-white dark:text-black bg-slate-300 text-black pl-2"/>
        </div>
    );
};
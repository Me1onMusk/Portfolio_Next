

export default function SearchBar() {
    return(
        <div className="flex w-1/4 border p-2 rounded-lg flex-row">
            <input 
                className="dark:bg-slate-800 pl-2 flex-1 flex"
                placeholder="검색어를 입력하세요"/>
            <button
                className="dark:hover:text-gray-300 hover:text-gray-500 flex">
                검색
            </button>
        </div>
    );
};
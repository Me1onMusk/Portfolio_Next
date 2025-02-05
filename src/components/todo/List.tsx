
import { useState, useMemo } from "react";
import ToDoItem from "./ToDo-item";

const List = ({ todos, onUpdate, onDelete}) => { 
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => { setSearch(e.target.value); };

    // 데이터 찾기 // 
    const getFilteredData = () => {
        if(search === "") return todos;
        return todos.filter((todo) => todo.content
            .toLowerCase()
            .includes(search.toLowerCase())
        );
    };
 
    const filteredToDos = getFilteredData();
    
    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount, 
            doneCount,
            notDoneCount
        }
    }, [todos]); 

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className="items-center justify-center flex flex-col gap-2 p-5">
            <h4>ToDo List 🌱</h4>
            <div>총: { totalCount } | 완료: { doneCount } | 진행중: { notDoneCount }</div>
            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            <div className="flex flex-col w-1/4">
                {
                    filteredToDos.map((todo) => { 
                        return (<ToDoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>)
                    })
                }
            </div>
        </div>
    );
};

export default List;
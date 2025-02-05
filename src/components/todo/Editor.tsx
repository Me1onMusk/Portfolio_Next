
import { useState, useRef } from "react";

const Editor = ({onCreate}) => {

    const [content, setContent] = useState("");
    const contentRef = useRef(null);

    const onChangeContent = (e) => { setContent(e.target.value); };

    const onKeyDown = (e) => { //엔터 누르면 추가 
        if(e.keyCode === 13) onSubmit(); 
    }
    
    const onSubmit = () => {
        if(content === "") { //입력값이 공백이면
            // contentRef.current.focus();  //입력칸 포커스 
            return;  
        }
        onCreate(content);  //content 보내기
        setContent("");     //빈 문자열로 초기화 
    };

    return (
        <div 
            className="flex justify-center items-center">
            <input 
                className="border rounded-lg border-black p-2 dark:bg-white dark:text-black"
                ref = {contentRef}
                value={content} 
                onChange={onChangeContent} 
                onKeyDown = {onKeyDown}
                placeholder="새로운 ToDo..."/>
            <button 
                className="border rounded-lg p-2 ml-2 bg-blue-200 items-center dark:bg-blue-400"
                onClick={ onSubmit }>
                추가
            </button>
        </div>
    );
};

export default Editor;
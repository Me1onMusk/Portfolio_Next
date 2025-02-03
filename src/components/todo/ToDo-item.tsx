
import React, { memo, useState } from 'react'; 
import Modal from './Modal';

export default function ToDoItem ({ id, isDone, content, date, onUpdate, onDelete }) { 

    const [ isHovered, setIsHovered ] = useState(false); //호버 상태 
    const [ isModalOpen, setIsModalOpen ] = useState(false); 

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    // 모달 열기
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false); 
        onChangeCheckBox(); 
    };

    // 삭제 처리
    const handleDelete = () => {
        onDelete(id); // 항목 삭제
        closeModal(); // 모달 닫기
    };

    return (
        <div className="flex w-full items-center justify-center gap-10 p-2 text-xl">
            <input
                className=''
                onChange={ onChangeCheckBox } 
                checked={ isDone } 
                type="checkbox" /> 
            <div className="flex w-full">{ content }</div>
            <div className="flex w-full">{ date }</div>
            <button 
                className={ `flex w-full justify-center rounded-lg ${isDone ? (isHovered ? "bg-red-300" : "bg-red-500") : "bg-gray-100 dark:bg-slate-800"}` }
                disabled={ !isDone } 
                onClick={ openModal } 
                onMouseEnter={ () => setIsHovered(true) }  
                onMouseLeave={ () => setIsHovered(false) } > 
                삭제
            </button>
            {
                isModalOpen && (
                    <Modal isOpen={ isModalOpen } onClose={ () => setIsModalOpen(false) }>
                        <p className='text-lg'>정말 [ { content } ]을(를) 삭제하시겠습니까?</p>
                        <div className='flex justify-center gap-5 p-2'>
                            <button className="btn_check bg-blue-300 rounded-lg p-1" onClick={ handleDelete }>확인</button>
                            <button className="btn_cancel bg-red-300 rounded-lg p-1" onClick={ closeModal }>취소</button>
                        </div>
                    </Modal>)
            }
        </div>
    );
}; 
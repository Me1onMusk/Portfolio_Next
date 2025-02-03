
"use client";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null; // 모달이 닫혀있으면 아무것도 렌더링하지 않음

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black dark:text-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                <button
                    className="absolute top-2 right-2 text-xl font-bold"
                    onClick={ onClose }>
                    &times;
                </button>
                { children }
            </div>
        </div>
    );
}
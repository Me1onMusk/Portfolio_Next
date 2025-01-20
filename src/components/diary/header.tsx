

export default function Header({ leftChild, title, rightChild }) {
    return (
        <header className="border-b flex w-full">
            <div className="flex font-bold w-1/4 justify-start">{leftChild}</div>
            <div className="flex text-2xl w-1/2 font-bold justify-center items-center">{title}</div>
            <div className="flex font-bold w-1/4 justify-end">{rightChild}</div>
        </header>
    );
};
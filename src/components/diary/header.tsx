

export default function Header({leftChild, title, rightChild}) {
    return (
        <header className="flex justify-between items-center">
            <div>{leftChild}</div>
            <div className="justify-center items-center">{title}</div>
            <div>{rightChild}</div>
        </header>
    );
};
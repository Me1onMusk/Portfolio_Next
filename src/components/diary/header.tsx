

export default function Header({leftChild, title, rightChild}) {
    return (
        <header className="flex justify-center items-center">
            <div>{leftChild}{leftChild}</div>
            <div>{title}{title}</div>
            <div>{rightChild}{rightChild}</div>
        </header>
    );
};
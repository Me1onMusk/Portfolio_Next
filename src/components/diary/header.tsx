

export default function Header({leftChild, title, rightChild}) {
    return (
        <header>
            <div>{leftChild}{leftChild}</div>
            <div>{title}{title}</div>
            <div>{rightChild}{rightChild}</div>
        </header>
    );
};
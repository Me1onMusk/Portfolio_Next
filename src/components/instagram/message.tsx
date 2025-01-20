

export default function Message({ isFromMe, message }) {
    return(
        <div className={ `${isFromMe ? 'bg-light-blue-500 text-white ml-auto' : 'bg-gray-100 text-black'}` }>
            <p>{message}</p>
        </div>
    );
};
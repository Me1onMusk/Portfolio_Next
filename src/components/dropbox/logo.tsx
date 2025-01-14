
import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center gap-1">
            <Image 
                className="!w-10 !h-auto"
                src='/logo/dropbox_icon.png'
                alt="Mini Dropbox Logo" 
                width={50}
                height={50}/>
            <span className="text-xl font-bold">
                DropBox
            </span>
        </div>
    );
};

import DiaryProvider from "./DiaryProvider"; // 위에서 만든 파일

export default function Page({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
        <DiaryProvider>
            {children}
        </DiaryProvider>
        </>
    );
};
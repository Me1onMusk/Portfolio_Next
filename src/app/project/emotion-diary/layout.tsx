
import DiaryProvider from "./DiaryProvider"; // 위에서 만든 파일

export const metadata = {
    title: "Emotion Diary",
};

export default function Page({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
        <DiaryProvider>
            {children}
        </DiaryProvider>
        </>
    );
};
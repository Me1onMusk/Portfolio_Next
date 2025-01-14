
import SideBar from "@/components/instagram/side-bar";
import LogoutButton from "./logout-button";

export default function MainLayout({ user }) {
    return (
        <div className="m-10">
            <SideBar />
            <main className="flex flex-col items-center justify-center gap-5"> 
            <h1 className="font-bold text-xl">
                반갑습니다, { user.email?.split('@')?.[0] }님
            </h1>
            <LogoutButton />
        </main>
        </div>
    );
};

import SideBar from "@/components/instagram/side-bar";

export default function MainLayout({ children }) {
    return (
        <div className="m-10 flex ">
            <SideBar />
            { children }
        </div>
    );
};

import Hero_Anim from "./hero_anim";
import Hero_Main from "./hero_main";

export default function Hero() {
    return (
        <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
                <Hero_Main />
                <Hero_Anim />
            </div>
        </section>
        </>
    );
};

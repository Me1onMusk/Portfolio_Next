
import Header from "@/components/netflix/header";
import MovieCardList from "@/components/netflix/movie-card-list";

export default function Page() {
    return(
        <div className="container mx-auto">
            <Header />
            <main className="mt-20">
                <MovieCardList />
            </main>
        </div>
    );
};

import Header from "@/components/netflix/header";
import { getMovie } from "../../../../actions/movieActions";
import UI from "./ui";

export async function generateMetadata({ params, searchParams }) {
    const movie = await getMovie(params.id); 
    
    return (
        {
            title: movie!.title,
            description: movie!.overview,
            openGraph: {
                images: [movie!.image_url]
            }
        }
    );
};

export default async function MovieDetail({params}) {
    const movie = await getMovie(params.id);

    return(
        <div>
            <main>
                {
                    movie ? 
                    (
                        <div className="container mx-auto">
                            <Header />
                            <UI movie = {movie} />
                        </div>
                    ) :
                    (
                        <div>Movie does not exists</div>
                    )
                }
            </main>
        </div>
    );
};



export default function UI({ movie }) {
    return (
        <div className="container mx-auto">
            <main className="mt-20">
                <div className="flex flex-col md:flex-row items-center m-10"> 
                    <img 
                        src={movie.image_url}
                        className="w-1/4" />
                    <div className="md:w-2/3 w-full flex flex-col p-6 gap-4 items-center md:items-start">
                        <h1 className="text-3xl font-bold">
                            {movie.title}
                        </h1>
                        <p className="text-lg font-medium">
                            {movie.overview}
                        </p>
                        <div className="font-bold text-lg">
                            <i className="fas fa-star mr-1"/>
                            Vote Average: {movie.vote_average}
                        </div>
                        <div className="font-bold text-lg">
                            <i className="fas fa-fire mr-1" />
                            Popularity: {movie.popularity}
                        </div>
                        <div className="font-bold text-lg">
                            <i className="fas fa-calendar-days mr-1" />
                            Release Date: {movie.release_date}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
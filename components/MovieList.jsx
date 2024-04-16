import MovieCard from "./MovieCard";


export default function MovieList({movies}) {
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    movies.map(movie => (<MovieCard key={movie.id} movie={movie}/>))
                }
           
            </div>
        </div>
    )
}

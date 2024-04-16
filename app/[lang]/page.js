


import MovieList from "@/components/MovieList";

import Sidebar from "@/components/Sidebar";
import { getAllMovies } from "@/data/moviesDictionary";


export default async function HomePage({params : {lang}}) {
const movieList = await getAllMovies()

const movies  = movieList.map(movie => ({id:movie.id , genre_ids : movie.genre_ids , poster_path: movie.poster_path}))

  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar lang={lang}/>
        <MovieList movies={movies}/>
      </div>
    </main>
  );
}

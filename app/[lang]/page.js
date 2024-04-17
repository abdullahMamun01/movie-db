


import MovieList from "@/components/MovieList";

import Sidebar from "@/components/Sidebar";
import { getAllMovies } from "@/data/moviesDictionary";


export default async function HomePage() {
const movieList = await getAllMovies()

const movies  = movieList.map(movie => ({id:movie.id , genre_ids : movie.genre_ids , poster_path: movie.poster_path}))

  return (
    <>
   
        <MovieList movies={movies}/>

    </>
  );
}

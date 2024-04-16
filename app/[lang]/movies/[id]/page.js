import React from "react";
import MovieDetails from "@/components/MovieDetails";
import { getAllMovies } from "@/data/moviesDictionary";
import { notFound } from "next/navigation";

export default async function MovieDetailsPage({ params }) {
  const { id, lang } = params;
  const movies = await getAllMovies();
  const findMovie = movies.find((movie) => movie.id == id);
  if (!findMovie) {
    return notFound();
  }

  return (
    <div className="container md:w-[80%]">
      <MovieDetails lang={lang} movie={findMovie} />
    </div>
  );
}

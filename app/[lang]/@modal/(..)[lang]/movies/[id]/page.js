import Modal from '@/components/Modal'
import MovieDetails from '@/components/MovieDetails'
import { getAllMovies } from '@/data/moviesDictionary'
import React from 'react'




export default async function MovieModal({params}) {
   const {id , lang} = params
    const movies  = await getAllMovies()
    const findMovie  = movies.find(movie => movie.id == id)

  return (
    <Modal>
        <MovieDetails lang={lang} movie={findMovie}/>
    </Modal>
  )
}

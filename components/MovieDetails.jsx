import React from 'react'
import Image from 'next/image'
import { getDictionary } from '@/app/[lang]/dictionary/dictionaries'
export default async function MovieDetails({ movie ,lang}) {
  const language  = await getDictionary(lang)
  return (
    <section className=''>
      <div className=''>
        <Image className="w-full object-cover max-h-[300px] "
          src={movie?.backdrop_path} alt={movie?.title}
          width={0} height={0} sizes='90vw'
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image src={movie?.poster_path} width={100} height={100} alt="" />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">{movie?.title}</h2>
          <p className="my-2 text-slate-400 italic">
            {movie?.overview}
          </p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>Release Date : {movie?.release_date}</li>
            <li>Average Vote : {movie?.vote_average}</li>
            <li>Vote Count : {movie?.vote_count}</li>
            <li>Popularity : {movie?.popularity}</li>
          </ul>

        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
   
            {language.streamHd}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
             {language.streamHd}
          </button>
        </div>
      </div>
    </section>
  )
}

import movieList from "@/data/movies"
import { redirect } from "next/navigation";



export async function GET(_request , {params}){
    const findMovie = movieList.results.find(movie => movie.id  ===  parseInt(params.id))
    if(!findMovie){
        redirect('/api/movies')
    }
    return Response.json(findMovie)
}



export async function  PATCH (request , {params}){
    const movie  = await request.json()
    const findIndx = movieList.results.findIndex(movie => movie.id === parseInt(params.id))
    if(findIndx === -1){
        return Response.json({message: 'This movie do not exist in the database!'})
    }


    movieList.results[findIndx] = {
        ...movieList.results[findIndx] ,
        ...movie
    }
    return Response.json(movieList.results[findIndx])
}


export async function DELETE(_request , {params}){

    const findIndx = movieList.results.findIndex(movie => movie.id === parseInt(params.id))
    if(findIndx === -1){
        return Response.json({message: 'This movie do not exist in the database!'})
    }

    movieList.results.splice(findIndx,1) 

    return Response.json(movieList.results[findIndx])
}
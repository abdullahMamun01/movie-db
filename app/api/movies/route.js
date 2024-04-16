import movieList from "@/data/movies"




export async function GET (request) {
    
    return Response.json(movieList)
}
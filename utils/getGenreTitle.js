import genreMap from "@/data/genreMap";




export default function getGenreTitle (genre_ids){
    return genre_ids.map(id => genreMap[id]).join('/')
}
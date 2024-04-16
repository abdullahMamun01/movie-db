import 'server-only'

const moviesDictionaries = {
    movies : () => import('./movies.json').then((module) => module.default)
}


const getAllMovies = async () => moviesDictionaries['movies']();


export {getAllMovies}
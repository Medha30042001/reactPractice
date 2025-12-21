import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import MovieItem from "./MovieItem";

const MovieList = () => {

    const {movies} = useContext(MovieContext);

  return (    
    <>
        <ul>
            {movies.map(movie => (
                <MovieItem key={movie.id} movie = {movie}/>
            ))}
        </ul>
    </>
  )
}

export default MovieList
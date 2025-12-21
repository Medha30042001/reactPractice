import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

const WatchStats = () => {

  const {movies} = useContext(MovieContext);

  return (
    <>
        <h3>Total Movies</h3>
        <ul style={{listStyleType:'none'}}>
            {movies.map(movie => (
              <li><h4>{movie.title}</h4></li>
            ))}
        </ul>

        <h3>Watched movies count</h3>
        <ul style={{listStyleType:'none'}}>
            {movies.filter(movie => movie.watched === true)
            .map(movie => <li key={movie.id}><h4>{movie.title}</h4></li>)}
        </ul>

        <h3>Unwatched movies count</h3>
        <ul style={{listStyleType:'none'}}>
            {movies.filter(movie => movie.watched === false)
            .map(movie => <li key={movie.id}><h4>{movie.title}</h4></li>)}
        </ul>
    </>
  )
}

export default WatchStats;
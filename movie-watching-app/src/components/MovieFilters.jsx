import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

const MovieFilters = () => {

    const {setFil} = useContext(MovieContext);

  return (
    <>
      <div style={{display:'flex', gap:'10px', padding:'20px'}}>
        <button onClick={() => setFil('All')}>All</button>
        <button onClick={() => setFil('Watched')}>Watched</button>
        <button onClick={() => setFil('Unwatched')}>Unwatched</button>
      </div>

    </>
  )
}

export default MovieFilters;
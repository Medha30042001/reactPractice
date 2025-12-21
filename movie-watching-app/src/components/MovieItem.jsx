import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieItem = ({movie}) => {

    const {toggleWatched, removeMovie} = useContext(MovieContext);

  return (
    <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
        <h4 
            style={{textDecoration : movie.watched?'line-through':'none'}}
        >{movie.title}</h4>

        <button
            onClick={() => toggleWatched(movie.id)}
            style={{backgroundColor: movie.watched?'grey':'green', color:'white'}}
        >{movie.watched?"Undo":"Watched"}</button>

        <button 
            onClick={() => removeMovie(movie.id)}
            style={{backgroundColor:'red', color:'white'}}
        >Delete</button>
    </div>
  )
};

export default MovieItem;
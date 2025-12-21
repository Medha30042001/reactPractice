import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useRef } from "react";

const AddMovie = () => {

    const [title, setTitle] = useState("");
    const {addMovie} = useContext(MovieContext);
    const movieRef = useRef(null);

    useEffect(() => {
      movieRef.current.focus();
    }, []);

  return (
    <div style={{display:'flex', gap:'10px'}}>
        <input type="text"
        placeholder="Enter Movie Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={movieRef} />

        <button 
            onClick={() => {
                if(title.trim() === "") return;
                addMovie(title);
                setTitle("");
                movieRef.current.focus();
            }}
        >Add Movie</button>
    </div>
  )
}

export default AddMovie
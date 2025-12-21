import { useState } from "react"
import { MovieContext } from "../context/MovieContext"
import AddMovie from "./AddMovie"
import MovieFilters from "./MovieFilters"
import MovieList from "./MovieList"
import WatchStats from "./WatchStats"
import { useEffect } from "react"

const MovieProvider = () => {

    const [movies, setMovies] = useState([
        {id:1, title:"Movie A", watched:false},
        {id:2, title:"Movie B", watched:true},
        {id:3, title:"Movie C", watched:false},
        {id:4, title:"Movie D", watched:true},
        {id:5, title:"Movie E", watched:false}
    ]);
    const [fil, setFil] = useState("All");

    const addMovie = (title) => {
        setMovies(prev => [...prev, {id:Date.now(), title, watched:false}]);
    }

    const toggleWatched = (id) => {
        setMovies(prev => prev.map(movie => movie.id === id ? { ...movie, watched:!movie.watched} : movie))
    } 

    const removeMovie = (id) => {
        setMovies(prev => prev.filter(movie => movie.id !== id));
    }

    const filteredMovies = 
        fil === 'Watched'
        ? movies.filter(movie => movie.watched)
        : fil === 'Unwatched'
        ? movies.filter(movie => !movie.watched)
        : movies;

    useEffect(() => {
        console.log("Movie list changed");
        return () => {
            console.log("MovieProvider Cleanup");
        }
    }, [movies])

  return (
    <MovieContext.Provider value = {{
        movies: filteredMovies, setFil, 
        addMovie, toggleWatched, removeMovie}}>

        <MovieFilters /><br />
        <AddMovie />
        <MovieList />
        <WatchStats />
    </MovieContext.Provider>
  )
}

export default MovieProvider
import React, { useState,useEffect } from "react";
import { MovieCard } from "./MovieCard";


export const PopularMovies = () => {

  const [results, setResults] = useState([]);



    useEffect( () => {

      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          }
        });
    }, [])



  


  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Popular Movies</h1>

          <span className="count-pill">
            {results.length} {results.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {results.length > 0 ? (
          <div className="movie-grid">
            {results.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="popular" isRemovable={true}/>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Empty list</h2>
        )}
      </div>
    </div>
  );
};

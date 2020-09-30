import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie, isRemovable }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          { isRemovable ? 
          "" : (<button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>)}
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          {isRemovable ? 
          "": (<button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>) }
        </>
      )}
      {type === "popular" && (
        <>
        <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
          <i className="fa fa-heart"></i>
        </button>
        {isRemovable ? 
        "": (<button
          className="ctrl-btn"
          onClick={() => removeFromWatched(movie.id)}
        >
          <i className="fa-fw fa fa-times"></i>
        </button>) }
      </>
      )}
      
    </div>
  );
};

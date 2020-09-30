import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/"><img className="logo" src="claquette.png" alt="Logo"></img>Cinematic.</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/PopularMovies">Popular Movies</Link>
            </li>
            
            <li>
              <Link to="/About">About</Link>
            </li>
            
            <li>
              <Link to="/">Watchlist</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Search and add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

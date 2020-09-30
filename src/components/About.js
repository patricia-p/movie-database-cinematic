import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
      <div className="about-container">
        <div className="about-inner-content">
          <div className="about">
            <h1 className="about-title">About Cinematic</h1>
            <p>Cinematic is an all-in-one platform to keep track of your the latest and greatest movies, your movie favourites, and for you to keep track of what you've watched. <br /></p>
            <p>*This product uses the TMDb API but is not endorsed or certified by TMDb.*</p>
            <img className="tmdb-logo" src="tmdb-logo-png.png" alt="TMDB Logo"></img>
          </div>
        </div>
      </div>
  );
};

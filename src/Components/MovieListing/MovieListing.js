import React from "react";
import { useSelector } from "react-redux";
import "./MovieListing.scss";
const MovieListing = () => {
//   const movies = useSelector(getAllMovies);
//   const shows = useSelector(getAllShows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container"></div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container"></div>
      </div>
    </div>
  );
};

export default MovieListing;

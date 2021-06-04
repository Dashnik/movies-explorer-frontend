import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "./MoviesCard";
import { CurrentMoviesContext } from "../contexts/CurrentContext";

function MoviesCardList(props) {
  const currentCardsAfterSearch = React.useContext(CurrentMoviesContext);
 

  return (
    <div className="moviesCardList">
      {currentCardsAfterSearch.map((movie) => (
        <MoviesCard
          // key={movie.id}
          key={movie.movieId}
          movie={movie}
          onAddMovieToBookmark={props.onBookmarkClick}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;

import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "./MoviesCard";
import { CurrentMoviesContext } from "../contexts/CurrentContext";

function MoviesCardList(props) {
  const currentCardsAfterSearch = React.useContext(CurrentMoviesContext);
 
console.log('currentCardsAfterSearch:',currentCardsAfterSearch);
console.log('props.moviesAfterSearch:',props.moviesAfterSearch);
  return (
    <div className="moviesCardList">
      {/* {currentCardsAfterSearch.map((movie) => ( */}
        { props.moviesAfterSearch.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          onAddMovieToBookmark={props.onBookmarkClick}
        />
      ))}
    </div>
  );
}

export default MoviesCardList;

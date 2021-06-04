import React from "react";
import "./Movies.css";
import SearchesForm from "./SearchesForm";
import MovedCardList from "./MoviesCardList";

function Movies(props) {
  
  return (
    <div className="movies">
      <SearchesForm onSearchMovie={props.handleSearchMovies}></SearchesForm>
      <MovedCardList
       onBookmarkClick={props.onBookmarkClick}
        />
    </div>
  );
}

export default Movies;

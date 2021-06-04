import React from "react";
import "./Movies.css";
import SearchesForm from "./SearchesForm";
import MovedCardList from "./MoviesCardList";
// import { CurrentMoviesContext } from "../contexts/CurrentContext";

function Movies(props) {
  // const isOpenYet = true;
  // const currentCardsAfterSearch = React.useContext(CurrentMoviesContext);

  return (
    <div className="movies">
      <SearchesForm onSearchMovie={props.handleSearchMovies}></SearchesForm>
      <MovedCardList
       onBookmarkClick={props.onBookmarkClick}
        />
      {/* <Preloader/> */}
    </div>
  );
}

export default Movies;

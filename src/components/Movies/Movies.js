import React from "react";
import "./Movies.css";
import SearchesForm from "./SearchesForm";
import MovedCardList from "./MoviesCardList";
import Header from "../Header/Header";
import Preloader from "../Movies/Preloader.js";
import Footer from "../Footer/Footer";


function Movies(props) {
  
  return (
    <>
    <Header/>
    <div className="movies">
      <SearchesForm onSearchMovie={props.handleSearchMovies}></SearchesForm>
      <MovedCardList
       onBookmarkClick={props.onBookmarkClick}
       moviesAfterSearch={props.moviesAfterSearch}
        />
    </div>
    <Preloader />
    {props.didYouDoSearch && props.moviesAfterSearch.length === 0 ? (
                    <p className="searches__error searches__error-empty">
                      Ничего не найдено
                    </p>
                  ) : (
                    ""
                  )}
                  {props.nextButtonVisible ? (
                    <button
                      type="button"
                      className="moviesCardList__add_button"
                      onClick={props.handleAddMoviesButton}
                    >
                      <p className="moviesCardList__container">Ещё</p>
                    </button>
                  ) : (
                    ""
                  )}
                  <Footer />
    </>
  );
}

export default Movies;

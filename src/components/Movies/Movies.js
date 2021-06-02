import React from 'react';
import './Movies.css';
import SearchesForm from './SearchesForm';
import MovedCardList from './MoviesCardList';
import Preloader from './Preloader'

function Movies (props) {

  const isOpenYet = true;

  return (
    <div className="movies">
      <SearchesForm
        onSearchMovie={props.handleSearchMovies}></SearchesForm>
      <MovedCardList onBookmarkClick={props.onBookmarkClick} />
      <Preloader/>
 
     {/* <button type="button" className={`movies__submit ${props.addMoviesYet ? 'movies__submit_opened' : ''}`}>Ещё</button>
    <p className={`movies__submit ${props.addMoviesYet ? '' : 'movies__submit_opened'}`}>Ничего не найдено</p> */}
    </div>
  )
}

export default Movies;
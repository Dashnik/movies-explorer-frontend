import React from 'react';
import './Movies.css';
import SearchesForm from './SearchesForm';
import MovedCardList from './MoviesCardList';
// import Preloader from './Preloader'

function Movies (props) {

  const isOpenYet = true;

  return (
    <div className="movies">
      <SearchesForm
             onSearchMovie={props.handleSearchMovies}></SearchesForm>
      <MovedCardList onBookmarkClick={props.onBookmarkClick} />
      {isOpenYet ? <button type="button" className="movies__submit">Ещё</button>
 :       <p className="movies__submit">Ничего не найдено</p>
}
    </div>
  )
}

export default Movies;
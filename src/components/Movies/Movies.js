import React from 'react';
import './Movies.css';
import SearchesForm from './SearchesForm';
import MovedCardList from './MoviesCardList';
// import Preloader from './Preloader'

function Movies () {
  return (
    <div className="movies">
      <SearchesForm></SearchesForm>
      <MovedCardList/>
      <button type="submit" className="movies__submit">
        Ещё
     </button>
    </div>
  )
}

export default Movies;
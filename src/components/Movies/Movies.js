import React from 'react';
import './Movies.css';
import SearchesForm from './SearchesForm';
// import PreLoader from './Preloader';
import MovedCardList from './MoviesCardList';

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
import React from 'react';
import '../SavedMovies/SavedMovies.css';
import SearchesForm from '../Movies/SearchesForm';
import MoviesCardList from '../SavedMovies/MoviesCardList';

function SavedMovies () {
  return (
    <div className="savedMovies">
      <SearchesForm></SearchesForm>
      <MoviesCardList/>    
    </div>
  )
}

export default SavedMovies;
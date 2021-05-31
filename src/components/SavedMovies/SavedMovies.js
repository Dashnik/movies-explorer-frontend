import React from 'react';
import './SavedMovies.css';
import SearchesForm from '../Movies/SearchesForm';
import SavedMoviesCardList from './SavedMoviesCardList';


function SavedMovies () {
  return (
    <div className="savedMovies">
      <SearchesForm></SearchesForm>
      <SavedMoviesCardList/>    
    </div>
  )
}

export default SavedMovies;
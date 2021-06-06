import React from 'react';
import './SavedMovies.css';
import SearchesForm from '../Movies/SearchesForm';
import SavedMoviesCardList from './SavedMoviesCardList';


function SavedMovies (props) {
  return (
    <div className="savedMovies">
      <SearchesForm></SearchesForm>
      <SavedMoviesCardList
      onDeleteMovieClick={props.onDeleteMovieClick}/>    
    </div>
  )
}

export default SavedMovies;
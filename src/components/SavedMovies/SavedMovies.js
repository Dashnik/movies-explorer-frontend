import React from 'react';
import './SavedMovies.css';
import SearchesForm from '../Movies/SearchesForm';
import MoviesCard from './MoviesCard';

function SavedMovies () {
  return (
    <div className="savedMovies">
    <SearchesForm></SearchesForm>
    <MoviesCard></MoviesCard>
    </div>
  )
}

export default SavedMovies;
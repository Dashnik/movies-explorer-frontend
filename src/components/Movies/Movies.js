import React from 'react';
import './Movies.css';
import SearchesForm from './SearchesForm';
import MoviesCard from './MoviesCard';
import PreLoader from './Preloader';

function Movies () {
  return (
    <div className="movies">
      <SearchesForm></SearchesForm>
      <MoviesCard></MoviesCard>
      <PreLoader></PreLoader>
    </div>
  )
}

export default Movies;
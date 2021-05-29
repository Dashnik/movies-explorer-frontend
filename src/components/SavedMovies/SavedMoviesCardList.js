import React from 'react';
import './SavedMoviesCardList.css';
import SavedMoviesCard from './SavedMoviesCard';

function SavedMoviesCardList () {
  return (
    <div className="savedMoviesCardList">
          <SavedMoviesCard></SavedMoviesCard>
    </div>
  )
}

export default SavedMoviesCardList;
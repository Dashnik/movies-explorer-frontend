import React from 'react';
import './SavedMoviesCardList.css';
import SavedMoviesCard from './SavedMoviesCard';
import { CurrentSavedMoviesContext } from "../contexts/CurrentContext";

function SavedMoviesCardList (props) {

  const currentSavedCards = React.useContext(CurrentSavedMoviesContext);

  console.log('currentSavedCards',currentSavedCards);
  return (
    <div className="savedMoviesCardList">
        {currentSavedCards.map((savedMovie) => (
          <SavedMoviesCard 
          key={savedMovie.movieId}
          movie={savedMovie}
       //   onAddMovieToBookmark={props.onBookmarkClick}
       />
        ))}
    </div>
  )
}

export default SavedMoviesCardList;
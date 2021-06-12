import React from 'react';
import './SavedMoviesCardList.css';
import SavedMoviesCard from './SavedMoviesCard';
import { CurrentSavedMoviesContext } from "../contexts/CurrentContext";

function SavedMoviesCardList (props) {

  const currentSavedCards = React.useContext(CurrentSavedMoviesContext);

  // let savedCardProduction = []

  // if (props.isSavedCardSearchCompleted){
  //   savedCardProduction = currentSavedCards;
  // }else{
  //   savedCardProduction = props.listSavedCardsAfterSearch
  // }

  return (
    <div className="savedMoviesCardList">
         {currentSavedCards.map((savedMovie) => ( 
          // {savedCardProduction.map((savedMovie) => (
          <SavedMoviesCard 
          key={savedMovie.movieId}
          movie={savedMovie}
          onDeleteMovie={props.onDeleteMovieClick}
       />
        ))}
    </div>
  )
}

export default SavedMoviesCardList;
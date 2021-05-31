import React from 'react';
import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import { CurrentMoviesContext } from "../contexts/CurrentContext";

function MoviesCardList () {

  const currentCardsAfterSearch = React.useContext(CurrentMoviesContext);

  console.log('currentCardsAfterSearch', currentCardsAfterSearch);
  return (
    <div className="moviesCardList">
      {currentCardsAfterSearch.map((movie)=>(
        <MoviesCard 
        key={movie.id}
        movie={movie}/>
      ))}
    </div>
  )
}

export default MoviesCardList;
import React from 'react';
import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import { CurrentMoviesContext } from "../contexts/CurrentContext";

function MoviesCardList (props) {

  const currentCardsAfterSearch = React.useContext(CurrentMoviesContext);
  
  const [isBookmarkSelected, setIsBookmarkSelected] = React.useState(false);
 //  const isBookmarkSelected = false;
//   const cardLikeButtonClassName = `card__like ${isLiked ? "card__like_active" : ""
// }`;


  return (
    <div className="moviesCardList">
      {currentCardsAfterSearch.map((movie)=>(
        <MoviesCard 
        key={movie.id}
        movie={movie}
        onBookmarkClick={props.onBookmarkClick}
        />
      ))}
    </div>
  )
}

export default MoviesCardList;
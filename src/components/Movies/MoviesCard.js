import React from "react";
import "./MoviesCard.css";
import bookmarkUnselected from "../../images/bookmarkUnselected.svg";
import bookmarkSelected from "../../images/bookmarkSelected.svg";
// import apiAuth from "../../utils/MainApi.js";
import { apiAuth } from '../../utils/MainApi.js';

function MoviesCard({props, movie}) {
  const [isBookmarkSelected, setIsBookmarkSelected] = React.useState(false);

  const email = 'ak@gmail.com';
  const pwd = 'qwerty';

  const handleLikeClick = () => {
   apiAuth.authorize(email, pwd)
   .then((data) => {
    console.log('data', data);
    
  })
  .catch((error) => console.log(error));
  }

  function handleImageClick(){
   window.open(movie.trailerLink, '_blank');
  }


  return (
    <>
      <div className="card" id={movie.id} > 
        <div className="card__container">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__time">{`${Math.trunc(movie.duration/60)}ч ${movie.duration % 60}м`}</p> 
          <button type="button" className="card__submit" onClick={handleLikeClick} >
            <img
              className="card__bookmark"
              src={isBookmarkSelected ? bookmarkSelected : bookmarkUnselected}
              alt="закладка для фильма"
            />
          </button>
        </div>
          <img className="card__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt='alt' onClick={handleImageClick}/>
      </div>
 
     </>
  );
}

export default MoviesCard;

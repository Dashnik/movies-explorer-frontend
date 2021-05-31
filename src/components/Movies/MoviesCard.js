import React from "react";
import "./MoviesCard.css";
import bookmarkUnselected from "../../images/bookmarkUnselected.svg";
import bookmarkSelected from "../../images/bookmarkSelected.svg";

function MoviesCard({movie}) {
  const isBookmarkSelected = false;

  return (
    <>
      <div className="card" id={movie.id} > 
        <div className="card__container">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__time">{`${Math.trunc(movie.duration/60)}ч ${movie.duration % 60}м`}</p> 
          <button type="button" className="card__submit">
            <img
              className="card__bookmark"
              src={isBookmarkSelected ? bookmarkSelected : bookmarkUnselected}
              alt="закладка для фильма"
            />
          </button>
        </div>
        <img className="card__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt='alt'/>
      </div>
 
     </>
  );
}

export default MoviesCard;

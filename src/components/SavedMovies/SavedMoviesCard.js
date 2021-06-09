import React from "react";
import "./SavedMoviesCard.css";
import closeIcon from "../../images/icon_close.svg";

function SavedMoviesCard({ onDeleteMovie, movie }) {

  const isLiked = true;

  function handleBookMarkClick() {
    onDeleteMovie(movie,isLiked);
  }

  return (
    <>
      <div className="savedCard" id={movie.id}>
        <div className="savedCard__container">
          <h2 className="savedCard__title">{movie.nameRU}</h2>
          <p className="savedCard__time">{`${Math.trunc(
            movie.duration / 60
          )}ч ${movie.duration % 60}м`}</p>
          <button
            type="button"
            className="savedCard__submit"
             onClick={handleBookMarkClick}
          >
            <img
              className="savedCard__close"
              src={closeIcon}
              alt="кнопка удаления карточки"
            />
          </button>
        </div>
        <img
          className="savedCard__image"
          src={movie.image}
          alt={movie.nameRU}
        />
      </div>
    </>
  );
}

export default SavedMoviesCard;

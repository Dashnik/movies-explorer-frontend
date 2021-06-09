import React from "react";
import "./MoviesCard.css";

function MoviesCard({ onAddMovieToBookmark, movie }) {
  const [isLiked, setIsLiked] = React.useState(!!movie.owner);
  
  function handleBookMarkClick() {
    onAddMovieToBookmark(movie, isLiked);
    setIsLiked(!isLiked);
  }

  function handleImageClick() {
    window.open(movie.trailer, "_blank");
  }

  function getReadableDuration() {
    if (movie.duration > 40) {
      return `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м `;
    } else {
      return ` ${movie.duration % 60}м `;
    }
  }
  const duration = getReadableDuration();


  return (
    <>
      <div className="card" id={movie.id}>
        <div className="card__container">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__time">{duration}</p>
          <button
            type="button"
            className={`card__bookmark ${
              isLiked ? "card__bookmark-active" : ""
            }`}
            onClick={handleBookMarkClick}
          ></button>
        </div>
        <img
          className="card__image"
          src={movie.image}
          alt={movie.nameRU}
          onClick={handleImageClick}
        />
      </div>
    </>
  );
}

export default MoviesCard;

import React from 'react';
import './MoviesCard.css';
import image from '../../images/pic.png'
import bookmarkUnselected from '../../images/bookmarkUnselected.svg';
import bookmarkSelected from '../../images/bookmarkSelected.svg';


function MoviesCard () {

    const isBookmarkSelected = false;

  return (
    <div className="moviesCard">
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={isBookmarkSelected ? bookmarkSelected : bookmarkUnselected} alt='закладка для фильма'/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={bookmarkSelected} alt='закладка для фильма'/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={isBookmarkSelected ? bookmarkSelected : bookmarkUnselected} alt='закладка для фильма'/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={isBookmarkSelected ? bookmarkSelected : bookmarkUnselected} alt='закладка для фильма'/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
    </div>
  )
}

export default MoviesCard;
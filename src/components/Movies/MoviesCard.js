import React from 'react';
import './MoviesCard.css';
import image from '../../images/pic.png'
import bookmark from '../../images/bookmark.svg';


function MoviesCard () {
  return (
    <div className="moviesCard">
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={bookmark}/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={bookmark}/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={bookmark}/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
      <div className='card'>
          <div className='card__container'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__time'>1ч 47м</p>
          <img className='card__bookmark' src={bookmark}/>
          </div>
          <img className='card__image' src={image}/>   
      </div>
    </div>
  )
}

export default MoviesCard;
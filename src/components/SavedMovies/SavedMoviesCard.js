import React from 'react';
import './SavedMoviesCard.css';
import image from '../../images/pic.png'
import closeIcon from '../../images/icon_close.svg';


function SavedMoviesCard () {

  return (
    <>
      <div className='card'>
          <div className='card__container'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <p className='card__time'>1ч 47м</p>
            <button type='submit' className='card__submit'>
              <img className='card__close' src={closeIcon} alt='кнопка удаления карточки'/>
            </button>
          </div>
          <img className='card__image' src={image} alt=''/>   
      </div>
      <div className='card'>
          <div className='card__container'>
            <h2 className='card__title'>33 слова о дизайне</h2>
            <p className='card__time'>1ч 47м</p>
            <button type='submit' className='card__submit'>
              <img className='card__close' src={closeIcon} alt='кнопка удаления карточки'/>
            </button>
          </div>
          <img className='card__image' src={image} alt=''/>   
      </div>
    </>
  )
}

export default SavedMoviesCard;
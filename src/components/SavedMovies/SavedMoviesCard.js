import React from 'react';
import './SavedMoviesCard.css';
import image from '../../images/pic.png'
import closeIcon from '../../images/icon_close.svg';


function SavedMoviesCard () {

  return (
    <>
      <div className='savedCard'>
          <div className='savedCard__container'>
            <h2 className='savedCard__title'>33 слова о дизайне</h2>
            <p className='savedCard__time'>1ч 47м</p>
            <button type='button' className='savedCard__submit'>
              <img className='savedCard__close' src={closeIcon} alt='кнопка удаления карточки'/>
            </button>
          </div>
          <img className='savedCard__image' src={image} alt=''/>   
      </div>
      <div className='savedCard'>
          <div className='savedCard__container'>
            <h2 className='savedCard__title'>33 слова о дизайне</h2>
            <p className='savedCard__time'>1ч 47м</p>
            <button type='button' className='savedCard__submit'>
              <img className='savedCard__close' src={closeIcon} alt='кнопка удаления карточки'/>
            </button>
          </div>
          <img className='savedCard__image' src={image} alt=''/>   
      </div>
    </>
  )
}

export default SavedMoviesCard;
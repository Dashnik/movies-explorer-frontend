import React from 'react';
import './SearchesForm.css';
import blackSearch from '../../images/black_search.svg';
import blueSearch from '../../images/blue_search.svg';

function SearchesForm () {
  return (
    <div className="searches">
      <form className="searches-form">
         <img className='searches__logo' src={blackSearch} alt="логотип лупы черного цвета"/>
          <button type='submit' className='searches__submit'>
            <img className='searches__lens' src={blueSearch} alt="логотип лупы синего цвета"/>
          </button>
          <input className='searches__input'
            type="text"
            placeholder={'Фильмы'}
            required
          />
         
        <p className="search__movies">Короткометражки</p> 
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
      </form>
    </div>
  )
}

export default SearchesForm;
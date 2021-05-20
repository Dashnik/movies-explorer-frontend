import React from 'react';
import './SearchesForm.css';
import blackSearch from '../../images/black_search.svg';
import blueSearch from '../../images/blue_search.svg';

function SearchesForm () {
  return (
    <div className="searches">
        <img className='searches__logo' src={blackSearch} alt="логотип лупы черного цвета"/>
        <button type='submit' className='searches__submit'>
        <img className='searches__lens' src={blueSearch} alt="логотип лупы синего цвета"/>
        </button>
        <input className='searches__input'
          type="text"
        placeholder={'Фильмы'}
        />
        <div className='searches__line'></div>
        <label class="switch">
            <input type="checkbox" checked/>
            <span class="slider round"></span>
        </label>
      <p className="search__movies">Короткометражки</p>
    </div>
  )
}

export default SearchesForm;
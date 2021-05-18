import React from 'react';
import './SearchesForm.css';
import blackSearch from '../../images/black_search.svg';
import blueSearch from '../../images/blue_search.svg';

function SearchesForm () {
  return (
    <div className="searches">
        <img className='searches__logo searches__logo1' src={blackSearch} alt="логотип лупы черного цвета"/>
        <img className='searches__logo searches__logo2' src={blueSearch} alt="логотип лупы синего цвета"/>
        <input className='searches__input'
        placeholder={'Фильмы'}
        ></input>
        <div className='searches__line'></div>
        <input type='checkbox' checked></input>
        <span class="slider round"></span>
      <p className="search__movies">Короткометражки</p>
    </div>
  )
}

export default SearchesForm;
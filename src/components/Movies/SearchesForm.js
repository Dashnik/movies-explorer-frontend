import React from 'react';
import './SearchesForm.css';
import blackSearch from '../../images/black_search.svg';
import blueSearch from '../../images/blue_search.svg';

function SearchesForm (props) {

  const [nameMovie, setNameMovie] = React.useState('');
  const [isShortMovie, setIsShortMovie ] = React.useState(false);


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onSearchMovie(nameMovie);
  }

  function handleChange(e){
   setNameMovie(e.target.value);
  }

  return (
    <div className="searches">
      <form className="searches-form" onSubmit={handleSubmit}>
         <img className='searches__logo' src={blackSearch} alt="не активная иконка лупы черного цвета"/>
          <button type='submit' className='searches__submit'>
            <img className='searches__lens' src={blueSearch} alt="кнопка поиска фильмов"/>
          </button>
          <input className='searches__input'
            type="text"
            placeholder={'Фильмы'}
            required
            value={nameMovie}
            onChange={handleChange}  
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
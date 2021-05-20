import React from 'react';
import './Header.css';
import logo from '../../images/header__logo.svg';
import account from '../../images/Account.svg';
import { Link } from "react-router-dom";

function Header(props) {

  const isLogin = true;
  if (isLogin){
    return (
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип дипломной работы" />
        <Link to="/sign-up" className="header__signup">
        {props.signup} 
      </Link>
      <Link to="/sign-in" className="header__signin">
         {props.login}
      </Link>  
      </header>
    );
  } else {
    return (
      <header className="header header-movies">
          <Link to="/" >
            <img className="header__logo" src={logo} alt="логотип дипломной работы" />
          </Link>
        <div className='header__container'>
          <Link to="/movies" >
            <div className='header__title'>Фильмы</div>
          </Link>
          <Link to="/saved-movies" >
            <div className='header__title'>Сохраненные фильмы</div>
          </Link>
        </div>
        <Link to="/profile" className="header__account">
         <img className="header__account" src={account} alt="логотип аккаунта" />       
        </Link>
      </header>
    );
  }

  
}


export default Header;

import React from 'react';
import './Header.css';
import logo from '../../images/header__logo.svg';
import account from '../../images/Account.svg';
import { Link } from "react-router-dom";

function Header(props) {

  const isLogin = false;
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
          <Link to="/" className="header__logo">
            <img className="header__logo" src={logo} alt="логотип дипломной работы" />
          </Link>
        <div className='header__container'>
          <Link to="/movies" >
            <button className='header__title'>Фильмы</button>
          </Link>
          <Link to="/saved-movies"  >
            <button className='header__title'>Сохраненные фильмы</button>
          </Link>
        </div>
        <Link to="/profile" className="header__account">
         {/* <img className="header__account" src={account} alt="логотип аккаунта" />        */}
         <div className="header__account"/>       
        </Link>
      </header>
    );
  }

  
}


export default Header;

import React from 'react';
import './Header.css';
import logo from '../../images/header__logo.svg';
import Register from '../Register/Register';
import Login from '../Login/Login';


function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип дипломной работы" />
      <Register/>
      
      <Login/>

    </header>
  );
}

export default Header;

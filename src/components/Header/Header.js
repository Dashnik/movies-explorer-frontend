import React from 'react';
import './Header.css';
import logo from '../../images/header__logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип дипломной работы" />
      <h2 className="header__logo" >{props.title}</h2>
    </header>
  );
}

export default Header;

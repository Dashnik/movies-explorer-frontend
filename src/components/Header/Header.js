import React from 'react';
import './Header.css';
import logo from '../../images/header__logo.svg';
import { Link } from "react-router-dom";

function Header(props) {

  const isLogin = false;

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип дипломной работы" />
      <Link to="/sign-up" className="header__signup">
          {/* {" "} */}
          {props.signup} 
        </Link>
        <Link to="/sign-in" className="header__signin">
          {/* {" "} */}
           {props.login}
        </Link>
    </header>
  );
}


export default Header;

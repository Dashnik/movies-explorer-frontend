import React from 'react';
import './Header.css';
import logo from '../../images/header__logo.svg';
import account from '../../images/Account.svg';
import { Link } from "react-router-dom";
import SideBar from './SideBar/SideBar';

function Header(props) {

  const [isSideBarOpen, setSideBar] = React.useState(false)
  // const [isLittleExtension, setIsLittleExtension] = React.useState(false);

  function handleMenuButtonClick(){
    setSideBar(!isSideBarOpen);
  }

  const isLogin = true;
  const isLittleExtension = false;

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
      <>
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
          <button className="menu__button" onClick={handleMenuButtonClick}>
          <div className="menu__button"/>
        </button>
          <Link to="/profile"  >
          </Link>
      </header>
      {/* <SideBar  isOpen={isSideBarOpen}></SideBar> */}
    </>
    );
  }

  
}


export default Header;

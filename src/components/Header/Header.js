import React from "react";
import "./Header.css";
import logo from "../../images/header__logo.svg";
import menu__account from "../../images/Account.svg";
import menu__burger from '../../images/burger.svg';
import { Link } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

function Header(props) {
  const [isSideBarOpen, setSideBar] = React.useState(false);

  function handleMenuButtonClick() {
    setSideBar(!isSideBarOpen);
  }

  function closeSideBar(){
    setSideBar(false);
  }
  
  if (props.loggedIn) {
    return (
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="логотип дипломной работы"
        />
        <ul className="header__links">
          <li className="header__link">
            <Link to="/sign-up" className="header__signup">
              {props.signup}
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className="header__signin">
              {props.login}
            </Link>
          </li>
        </ul>
      </header>
    );
  } else {
    return (
      <>
        <header className="header header-movies">
          <Link to="/" className="header__logo">
            <img
              className="header__logo"
              src={logo}
              alt="логотип дипломной работы"
            />
          </Link>
          <ul className="header__container">
            <li className='header__ref' >
              <Link to="/movies" className="header__title">
                Фильмы
              </Link>
            </li>
            <li className='header__ref' >
              <Link to="/saved-movies" className="header__title">
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <div  className="menu__button" >
            <Link to='/profile' className='menu__icon-menu'>
              <img className='menu__icon-menu' src={menu__account} alt='alt'/>
              </Link>
            <button type='button' className='menu__icon-cross' onClick={handleMenuButtonClick}>
            <img className='menu__icon-cross' src={menu__burger} alt='alt'/>
            </button>
          </div>
          <SideBar 
           isOpen={isSideBarOpen}
           onClose={closeSideBar}></SideBar> 
        </header>
      </>
    );
  }
}

export default Header;

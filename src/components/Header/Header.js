import React from "react";
import "./Header.css";
import logo from "../../images/header__logo.svg";
import account from "../../images/Account.svg";
import { Link } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

function Header(props) {
  const [isSideBarOpen, setSideBar] = React.useState(true);
  // const [isLittleExtension, setIsLittleExtension] = React.useState(false);

  function handleMenuButtonClick() {
    setSideBar(!isSideBarOpen);
  }

  const isLogin = false;
  const isLittleExtension = false;

  if (isLogin) {
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
          <button type='button' className="menu__button" onClick={handleMenuButtonClick}>
            <div className="menu__button" />
          </button>
          <Link to="/profile"></Link>
        </header>
      </>
    );
  }
}

export default Header;

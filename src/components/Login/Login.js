import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/header__logo.svg";

function Login(props) {

  return (
    <>
      <div className="login">
        <Link to="/" className="login__logo">
          <img
            className="login__logo"
            src={logo}
            alt="логотип дипломной работы"
          />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <p className="login__subtitle">E-mail</p>
          <input type='text' className="login__input login__input-email"/>
          <p className="login__subtitle">Пароль</p>
          <input
            type="password"
            className="login__input login__input-pwd"
            name="login__password"
          />
          <button type="submit" className="login__submit">
            Войти
          </button>
        </form>
        <div className="login__container">
          <span className="login__text">Ещё не зарегистрированы?</span>
          <Link to="/sign-up" className="link">
            Регистрация
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;

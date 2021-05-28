import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import "./Register.css";

function Register(props) {

  return (
    <>
  <div className="register">
        <Link to="/" className="register__logo">
          <img
            className="register__logo"
            src={logo}
            alt="логотип дипломной работы"
          />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <span className="register__subtitle register__subtitle-name">Имя</span>
          <input type='text' className="register__input register__input-name" required/>
          <span className="register__subtitle register__subtitle-email">E-mail</span>
          <input type='text' className="register__input register__input-email" required/>
          <span className="register__subtitle register__subtitle-pwd">Пароль</span>
          <input
            type="password"
            className="register__input register__input-pwd"
            required
          />
          <button type="submit" className="register__submit">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__container">
          <span className="register__text">Уже зарегистрированы?</span>
          <Link to="/sign-in" className="link">
            Войти
          </Link>
        </div>
      </div>
     
    </>
  );
}

export default Register;

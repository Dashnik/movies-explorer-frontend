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
          <span className="register__subtitleName">Имя</span>
          <input type='text' className="register__name"/>
          <span className="register__subtitleEmail">E-mail</span>
          <input type='text' className="register__email"/>
          <span className="register__subtitlePWD">Пароль</span>
          <input
            type="password"
            className="register__password"
          />
          <button type="submit" className="register__submit">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__container">
          <span className="register__text">Уже зарегистрированы?</span>
          <Link to="/sign-up" className="link">
            Войти
          </Link>
        </div>
      </div>
     
    </>
  );
}

export default Register;

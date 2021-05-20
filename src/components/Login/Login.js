import React from "react";
// import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/header__logo.svg";

function Login(props) {
  // const [values, setValues] = React.useState({ });

  // function handlesubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();

  //   // Передаём значения управляемых компонентов во внешний обработчик
  //  props.onLogin( values.login__email, values.login__password );
  // }

  // const handleChange = (e) => {

  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;

  //   setValues({...values,
  //     [name]: value
  //   });

  // };

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

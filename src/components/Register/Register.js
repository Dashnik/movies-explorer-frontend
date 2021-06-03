import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import "./Register.css";

function Register(props) {
  const [values, setValues] = React.useState({});

  function handlesubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
   props.onRegister(values.register__name, values.register__email, values.register__pwd);
  }

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
  };

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
        <form className="register__form"
         onSubmit={handlesubmit}>
          <span className="register__subtitle register__subtitle-name">
            Имя
          </span>
          <input
            type="text"
            className="register__input register__input-name"
            onChange={handleChange}
            name='register__name'
            required
          />
          <span className="register__subtitle register__subtitle-email">
            E-mail
          </span>
          <input
            type="email"
            className="register__input register__input-email"
            onChange={handleChange}
            name='register__email'
            required
          />
          <span className="register__subtitle register__subtitle-pwd">
            Пароль
          </span>
          <input
            type="password"
            className="register__input register__input-pwd"
            onChange={handleChange}
            name='register__pwd'
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

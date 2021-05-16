import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import './Login.css';

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

      <form className="login">
        <Header/>
        <h2 className="login__title">Рады видеть!</h2>
        <p className="login__subtitle">E-mail</p>
        <input
          className="login__email"
          name="login__email"
        />
        <p className="login__subtitle">Пароль</p>
        <input
          type="password"
          className="login__password"
          name="login__password"
        />
        <button type="submit" className="login__submit">
          Войти
        </button>
        <p className="login__text">Ещё не зарегистрированы?</p>
        <Link to="/sign-up" className="link">
          {" "}
           Регистрация
        </Link>
      </form>
    </>
  );
}

export default Login;

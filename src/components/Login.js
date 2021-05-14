import React from "react";
import Header from "./Header";

function Login(props) {

  const [values, setValues] = React.useState({ });

  function handlesubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
   props.onLogin( values.login__email, values.login__password );
  }

  const handleChange = (e) => {

    const target = e.target;
    const value = target.value;
    const name = target.name;

    setValues({...values,
      [name]: value
    });

  };

  return (
    <>
      <Header linkName="Регистрация" link="/sign-up" />
      <form className="login" onSubmit={handlesubmit}>
        <h2 className="login__label">Вход</h2>
        <input
          className="login__email"
          placeholder="Email"
          onChange={handleChange}
          name="login__email"
        />
        <input
          type="password"
          className="login__password"
          placeholder="Пароль"
          onChange={handleChange}
          name="login__password"
        />
        <button type="submit" className="login__submit">
          Войти
        </button>
      </form>
    </>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Register(props) {

  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const [values, setValues] = React.useState({});

  function handlesubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    //props.onRegister({ email, password });
    props.onRegister(values.register__email, values.register__pwd);
  }

  const handleChange = (e) => {

    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, 
    [name]:value
    });
    // e.target.name === 'register__email' ? setEmail(e.target.value) : ''

    // e.target.name === 'register__pwd' ? setPassword(e.target.value) : ''
  }


  return (
    <>
 
      <form 
      className="login"
      // onSubmit={handlesubmit}
      >
        <Header/>
        <h2 className="login__title">Добро пожаловать!</h2>
        <p className="login__subtitle">Имя</p>
        <input 
        type='text'
        className="login__email" 
        // onChange={handleChange}
        // name='register__email'
        />
          <p className="login__subtitle">E-mail</p>
        <input 
        type='text'
        className="login__email" 
        // placeholder="Email" 
        // onChange={handleChange}
        // name='register__email'
        />
          <p className="login__subtitle">Пароль</p>
        <input
          type="password"
          className="login__password"
          // placeholder="Пароль"
          // onChange={handleChange}
          // name='register__pwd'
        />
        <button
          type="submit"
          className="login__submit"
        >
          Зарегистрироваться
        </button>
        <p className="login__text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="link">
          {" "}
           Войти
        </Link>
      </form>
    </>
  );
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/header__logo.svg";
import { Formik } from "formik";
import * as yup from "yup";

function Login(props) {

  const validationSchema = yup.object().shape({
    email:yup.string().email('Введен невалидный email').required('Введите верный email'),
    password:yup.string().min(6, 'Пароль должен быть больше 6 символов').required('Обязательное поле')
  })

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
        <Formik
      initialValues={{
        email:'',
        password:''
      }}
      validateOnBlur
      onSubmit={(values)=>{
        props.onLogin(values.email, values.password);
      }}
      validationSchema={validationSchema}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>(

        <form className="login__form">
          <p className="login__subtitle">E-mail</p>
          <input
            type="email"
            className="login__input login__input-email"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
           { touched.email && errors.email && <p className="login__error">{errors.email}</p>} 
          <p className="login__subtitle">Пароль</p>
          <input
            type="password"
            className="login__input login__input-pwd"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          { touched.password && errors.password && <p className="login__error">{errors.password}</p>} 
          <button 
          type="submit"
           className="login__submit"
           onClick={handleSubmit}
           >
            Войти
          </button>
        </form>
                  )}
                  </Formik>
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

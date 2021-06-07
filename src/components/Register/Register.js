import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header__logo.svg";
import "./Register.css";
import { Formik } from "formik";
import * as yup from "yup";

function Register(props) {
  // const [values, setValues] = React.useState({});

  const validationSchema = yup.object().shape({
    name:yup.string().required('Обязательное поле'),
    email:yup.string().email('Введен невалидный email').required('Введите верный email'),
    password:yup.string().min(6, 'Пароль должен быть больше 6 символов').required('Обязательное поле')
  })

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
        <Formik
      initialValues={{
        name:'',
        email:'',
        password:''
      }}
      validateOnBlur
      onSubmit={(values)=>{
        props.onRegister(values.name, values.email, values.password);
      }}
      validationSchema={validationSchema}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>(
        <form className="register__form"
         >
          <span className="register__subtitle register__subtitle-name">
            Имя
          </span>
          <input
            type="text"
            className="register__input register__input-name"
            onChange={handleChange}
            name='name'
            value={values.name}
            onBlur={handleBlur}
          />
           { touched.name && errors.name && <p className="register__error">{errors.name}</p>} 
          <span className="register__subtitle register__subtitle-email">
            E-mail
          </span>
          <input
            type="email"
            className="register__input register__input-email"
            onChange={handleChange}
            name='email'
            value={values.email}
            onBlur={handleBlur}
          />
            { touched.email && errors.email && <p className="register__error register__error-email">{errors.email}</p>} 
          <span className="register__subtitle register__subtitle-pwd">
            Пароль
          </span>
          <input
            type="password"
            className="register__input register__input-pwd"
            onChange={handleChange}
            onBlur={handleBlur}
            name='password'
            value={values.password}
          />
           { touched.password && errors.password && <p className="register__error register__error-password">{errors.password}</p>} 
          <button type="submit" 
          className={`register__submit ${isValid && dirty  ? '' : 'register__submit-disabled'}`}
           onClick={handleSubmit}>
            Зарегистрироваться
          </button>
        </form>
          )}
           </Formik>
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

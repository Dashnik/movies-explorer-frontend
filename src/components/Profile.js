import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./contexts/CurrentContext";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "./Header/Header";

function Profile(props) {
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);

  const validationSchema = yup.object().shape({
    name:yup.string().required('Обязательное поле'),
    email:yup.string().email('Введен невалидный email').required('Поле не может быть пустым')
  })

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSignOut() {
    props.onSignOut();
  };

  return (
    <>
    <Header />
    <div className="profile">
      <h3 className="profile__title"> Привет, {currentUser.name}!</h3>
      <Formik
      initialValues={{
        name:currentUser.name,
        email:currentUser.email,
      }}
      validateOnBlur
      onSubmit={(values)=>{
        props.onUpdateUser(values);
      }}
      validationSchema={validationSchema}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>(
          <form className="profile__form"  >
            <input
              type="text"
              className="profile__input"
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></input>
            <p className="profile__name">Имя</p>
            { touched.name && errors.name && <p className="profile__error">{errors.name}</p>} 
            <p className="profile__email">E-mail</p>
            <input className="profile__input profile__email email-address"
            type={'email'}
              value={values.email}
              name={'email'}
              onBlur={handleBlur}
              onChange={handleChange}
            ></input>
             { touched.email && errors.email && <p className="profile__error">{errors.email}</p>} 
            <button 
            className={`profile__edit ${isValid && dirty  ? '' : 'profile__edit-disabled'}`}
            onClick={handleSubmit}
            type={'submit'}
            >Редактировать</button>
            <Link to="/" className="profile__logout">
              <button className="profile__logout" onClick={handleSignOut}>
                Выйти из аккаунта
              </button>
            </Link>
          </form>
        )}
          
          </Formik>
    </div>
    </>
  );
}

export default Profile;

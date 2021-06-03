import React from "react";
import "./SearchesForm.css";
import blackSearch from "../../images/black_search.svg";
import blueSearch from "../../images/blue_search.svg";
import { Formik } from "formik";
import * as yup from "yup";

function SearchesForm(props) {
  const validationSchema = yup
    .object()
    .shape({ name: yup.string().required("Нужно ввести ключевое слово") });

  const [nameMovie, setNameMovie] = React.useState("");
  const [isShortMovie, setIsShortMovie] = React.useState(false);

  function handleToggleChange() {
    setIsShortMovie(!isShortMovie);
  }

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      // validateOnBlur
      onSubmit={(values) => {
        props.onSearchMovie(values, isShortMovie);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div className="searches">
          <form className="searches-form" onSubmit={handleSubmit} noValidate>
            <img
              className="searches__logo"
              src={blackSearch}
              alt="не активная иконка лупы черного цвета"
            />
            <button type="submit" className="searches__submit">
              <img
                className="searches__lens"
                src={blueSearch}
                alt="кнопка поиска фильмов"
              />
            </button>
            <input
              className="searches__input"
              type="text"
              placeholder={"Фильмы"}
              required
              value={nameMovie}
              name={`name`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <p className="searches__error">{errors.name}</p>
            <p className="search__movies">Короткометражки</p>
            <label className="switch" onChange={handleToggleChange}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default SearchesForm;

// function handleSubmit(e) {
//   // Запрещаем браузеру переходить по адресу формы
//   e.preventDefault();

//   // Передаём значения управляемых компонентов во внешний обработчик
//   // props.onSearchMovie(nameMovie,isShortMovie);
// }

// function handleChange(e){
//  setNameMovie(e.target.value);
// }

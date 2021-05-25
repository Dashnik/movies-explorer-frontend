import React from "react";
import './AboutMe.css';
import { Link } from "react-router-dom";
import Vital from '../../images/Vital.jpg';

function AboutMe(props) {

  return (
    <>
      <div className="aboutMe" id= "aboutMe">
       <h1 className='aboutMe__title'>Студент</h1>
       <div className='aboutMe__separator'></div>
       <img className="aboutMe__avatar" src={Vital} alt="Vital" />
       <p className='aboutMe__name'>Виталий</p>
       <p className='aboutMe__shortDescription'>Фронтенд-разработчик, 30 лет</p>
       <p className='aboutMe__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <ul className='aboutMe__container-links'>
          <Link name="aboutMe" to="https://www.facebook.com/" className="aboutMe__link">
            {" "}
            Facebook
          </Link>
          <Link to="https://github.com/" className="aboutMe__link">
            {" "}
            Github
          </Link>
        </ul>
      </div>
    </>
  );
}

export default AboutMe;
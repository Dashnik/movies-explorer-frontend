import React from "react";
import './AboutMe.css';
import Vital from '../../images/Vital.jpg';

function AboutMe(props) {

  return (
    <>
      <div className="aboutMe" id= "aboutMe">
       <h1 className='aboutMe__title'>Студент</h1>
       <div className='aboutMe__separator'></div>
       <img className="aboutMe__avatar" src={Vital} alt="Vital" />
       <p className='aboutMe__name'>Василий</p>
       <p className='aboutMe__shortDescription'>Фронтенд-разработчик, 30 лет</p>
       <p className='aboutMe__description'>Я родился и живу в Нью йорке, закончил факультет экономики MIT. У меня есть жена 
и жена. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «Рога и копыта». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <ul className='aboutMe__container-links'>
          <li>
          <a href="https://www.facebook.com/" name="aboutMe" to="https://www.facebook.com/" className="aboutMe__link" target="_blank" rel="noopener noreferrer">
            {" "}
            Facebook
          </a>
          </li>
          <li>
          <a href="https://github.com/Dashnik" to="https://github.com/" className="aboutMe__link" target="_blank" rel="noopener noreferrer">
            {" "}
            Github
          </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutMe;
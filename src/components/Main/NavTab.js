import React from "react";
import './NavTab.css';
import { Link } from "react-router-dom";

function NavTab(props) {

  return (
    <>
      <div className="NavTab">
       <h1 className='NavTab__title'>Учебный проект студента факультета Веб-разработки.</h1>
         <ul className='NavTab__container' >
          <li className='NavTab__link'>О проекте</li>
          <li className='NavTab__link'>Технологии</li>
          <li className='NavTab__link'>Студент</li>
        </ul>
      </div>
    </>
  );
}

export default NavTab;
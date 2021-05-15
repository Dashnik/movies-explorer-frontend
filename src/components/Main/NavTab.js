import React from "react";
import './NavTab.css';

function NavTab(props) {

  return (
    <>
      <div className="NavTab">
       <h1 className='NavTab__title'>Учебный проект студента факультета Веб-разработки.</h1>
         <div className='NavTab__container' >
         <button className='NavTab__link'>О проекте</button>
         <button className='NavTab__link'>Технологии</button>
         <button className='NavTab__link'>Студент</button>
        </div>
      </div>
    </>
  );
}

export default NavTab;
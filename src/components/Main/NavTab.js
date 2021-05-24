import React from "react";
import './NavTab.css';
// import { Link } from "react-router-dom";
// import AboutMe from "./AboutMe";
import { HashLink as Link } from 'react-router-hash-link';

function NavTab(props) {

  return (
    <>
      <div className="NavTab">
       <h1 className='NavTab__title'>Учебный проект студента факультета Веб-разработки.</h1>
         <ul className='NavTab__container'>
          <li className='NavTab__link'>
            <Link to='#aboutProject'> О проекте </Link>
            </li>
          <li className='NavTab__link'>
            <Link to='#techs'>Технологии </Link> 
            </li>
          <li className='NavTab__link'>
          <Link to='#aboutMe'> Студент </Link>
            </li>
        </ul>
      </div>
    </>
  );
}

export default NavTab;
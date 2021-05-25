import React from "react";
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab(props) {

  return (
    <>
      <div className="NavTab">
       <h1 className='NavTab__title'>Учебный проект студента факультета Веб-разработки.</h1>
         <ul className='NavTab__container'>
          <li className='NavTab__links'>
            <Link to='#aboutProject' className='NavTab__link'> О проекте </Link>
            </li>
          <li className='NavTab__links'>
            <Link to='#techs' className='NavTab__link'>Технологии </Link> 
            </li>
          <li className='NavTab__links'>
          <Link to='#aboutMe' className='NavTab__link'> Студент </Link>
            </li>
        </ul>
      </div>
    </> 
  );
}

export default NavTab;
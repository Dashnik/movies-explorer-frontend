import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import closeLink from '../../../images/closeLink.svg';
import account from '../../../images/Account.svg';

function SideBar(props) {
  return (
    <form className={`sideBar ${props.isOpen ? "sideBar_opened" : ""}`}>
      <button type='button' className='sideBar__close'></button>   
     <ul className='sideBar__container'>
        <li className='sideBard-main'>
          <Link to="/"className='sideBar__nav' >
            Главная
          </Link>
        </li>
        <li className='sideBard-movies'>
          <Link to="/movies" className='sideBar__nav'>
            Фильмы
          </Link>
        </li>
        <li className='sideBard-saved-movies'>
          <Link to="/saved-movies" className='sideBar__nav'>
            Сохраненные фильмы
          </Link>
        </li>
        <li className='sideBard-account'>
          <Link to="/profile" className='sideBar__nav'>
            <img src={account} alt=''/>
          </Link>
        </li>
      </ul>
    </form>
  );
}

export default SideBar;

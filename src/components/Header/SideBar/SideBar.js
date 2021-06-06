import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import account from '../../../images/Account.svg';

function SideBar(props) {
  return (
    <form className={`sideBar ${props.isOpen ? "sideBar_opened" : ""}`}>
      <button type='button' className='sideBar__close' onClick={props.onClose}></button>   
     <ul className='sideBar__container'>
        <li className='sideBard-main'>
          <Link to="/"className='sideBar__nav'  onClick={props.onClose} >
            Главная
          </Link>
        </li>
        <li className='sideBard-movies'>
          <Link to="/movies" className='sideBar__nav'  onClick={props.onClose}>
            Фильмы
          </Link>
        </li>
        <li className='sideBard-saved-movies'>
          <Link to="/saved-movies" className='sideBar__nav' onClick={props.onClose}>
            Сохраненные фильмы
          </Link>
        </li>
        <li className='sideBard-account'>
          <Link to="/profile" className='sideBar__nav' onClick={props.onClose}>
            <img src={account} alt=''/>
          </Link>
        </li>
      </ul>
    </form>
  );
}

export default SideBar;

import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import closeLink from '../../../images/closeLink.svg';
import account from '../../../images/Account.svg';

function SideBar(props) {
  return (
    <div className={`sideBar ${props.isOpen ? "sideBar_opened" : ""}`}>
        <button type='submit'>
            <img className='sideBar__close' src={closeLink} alt=''/>
        </button>
      <ul className='sideBar__nav'>
        <li>
          <Link to="/" className='sideBar__nav'>
            Главная
          </Link>
        </li>
        <li>
          <Link to="/movies" className='sideBar__nav'>
            Фильмы
          </Link>
        </li>
        <li>
          <Link to="/saved-movies" className='sideBar__nav'>
            Сохраненные фильмы
          </Link>
        </li>
        <li>
          <Link to="/profile" className='sideBar__nav'>
            <img src={account} alt=''/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

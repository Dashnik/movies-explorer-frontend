import React from 'react';
import './Profile.css';
import { Link } from "react-router-dom";

function Profile () {
  return (
    <div className="profile">
      <h3 className='profile__title'> Привет, Виталий!</h3>
      <form className="profile__form">      
        <input type="text" 
        className='profile__input'
        value={'Виталий'}
        ></input>
        <p className='profile__name'>Имя</p>
        <p className='profile__email'>E-mail</p>
        <button className='profile__edit'>Редактировать</button>
        <Link to="/" className='profile__logout'>
        <button className='profile__logout'>Выйти из аккаунта</button>
          </Link>
        <p className='profile__email email-address'>mail@mail.com</p>
        </form>
    </div>
  )
}

export default Profile;
import React from 'react';
import './Profile.css';

function Profile () {
  return (
    <div className="profile">
      <h3 className='profile__title'> Привет, Виталий!</h3>
      <p className='profile__name'>Имя</p>
      <p className='profile__alias'>Виталий</p>
      <input type="text" className='profile__name-input'></input>
      <div className='profile__line'></div>
      <p className='profile__email'>E-mail</p>
      <p className='profile__email'>E-mail address</p>
      <button className='profile__edit'>Редактировать</button>
      <button className='profile__logout'>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;
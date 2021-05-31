import React from 'react';
import './PageNotFound.css';
import { Link } from "react-router-dom";

function PageNotFound () {
  return (
    <div className="pageNotFound">
      <h3 className='pageNotFound__title'>404</h3>
      <p className='pageNotFound__subtitle'>Страница не найдена</p>
      <button type='submit' className='pageNotFound__submit'>
      <Link to="/" className="link">
      Назад
        </Link></button>
      </div>
  )
}

export default PageNotFound;
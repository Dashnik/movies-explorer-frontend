import React from "react";
import './Portfolio.css';
import link__logo from '../../images/link__logo.svg';
import { Link } from "react-scroll";

function Portfolio(props) {

  return (
    <>
      <div className="portfolio">
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__container'>
          <Link className='portfolio__link'>Статичный сайт
          <img className="portfolio__logo" src={link__logo} alt="ссылка на переход"/>
            </Link>
            <Link className='portfolio__link '>Адаптивный сайт
            <img className="portfolio__logo" src={link__logo} alt="ссылка на переход"/>
            </Link>
            <Link className='portfolio__link '>Одностраничное приложение
            <img className="portfolio__logo" src={link__logo} alt="ссылка на переход"/>
            </Link>
        </ul>
        
           
      </div>
    </>
  );
}

export default Portfolio;
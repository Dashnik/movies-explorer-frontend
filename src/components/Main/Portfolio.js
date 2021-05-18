import React from "react";
import './Portfolio.css';
import link__logo from '../../images/link__logo.svg';

function Portfolio(props) {

  return (
    <>
      <div className="portfolio">
        <h3 className='portfolio__title'>Портфолио</h3>
            <p className='portfolio__subtitle subtitle1'>Статичный сайт</p>
            <div className='test'></div>      
            <p className='portfolio__subtitle subtitle2'>Адаптивный сайт</p>
            <div className='test2'></div>   
            <p className='portfolio__subtitle subtitle3'>Одностраничное приложение</p>
          <img className="portfolio__logo logo1" src={link__logo} alt="логотип дипломной работы" />
          <img className="portfolio__logo logo2" src={link__logo} alt="логотип дипломной работы" />
          <img className="portfolio__logo logo3" src={link__logo} alt="логотип дипломной работы" />
      </div>
    </>
  );
}

export default Portfolio;
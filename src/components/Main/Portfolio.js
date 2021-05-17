import React from "react";
import './Portfolio.css';
import link__logo from '../../images/link__logo.svg';

function Portfolio(props) {

  return (
    <>
      <div className="portfolio">
        <h3 className='portfolio__title'>Портфолио</h3>
        <p className='portfolio__subtitle'>Статичный сайт</p>
        <div className='test'></div>
        <img className="portfolio__logo" src={link__logo} alt="логотип дипломной работы" />
        <p className='portfolio__subtitle'>Адаптивный сайт</p>
        <img className="portfolio__logo" src={link__logo} alt="логотип дипломной работы" />
        <p className='portfolio__subtitle'>Одностраничное приложение</p>
        <img className="portfolio__logo" src={link__logo} alt="логотип дипломной работы" />
      </div>
    </>
  );
}

export default Portfolio;
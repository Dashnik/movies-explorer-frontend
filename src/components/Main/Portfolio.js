import React from "react";
import './Portfolio.css';

function Portfolio(props) {

  return (
    <>
      <div className="portfolio">
        <h3 className='portfolio__title'>Портфолио</h3>
        <p className='portfolio__subtitle'>Статичный сайт</p>
        <p className='portfolio__subtitle'>Адаптивный сайт</p>
        <p className='portfolio__subtitle'>Одностраничное приложение</p>
      </div>
    </>
  );
}

export default Portfolio;
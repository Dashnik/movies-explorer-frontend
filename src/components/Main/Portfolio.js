import React from "react";
import "./Portfolio.css";
import link__logo from "../../images/link__logo.svg";

function Portfolio(props) {
  return (
    <>
      <div className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__container">
          <li>
          <a href="https://github.com/Dashnik/how-to-learn" className="portfolio__link" target="_blank" rel="noopener noreferrer">
            Статичный сайт
            <img
              className="portfolio__logo"
              src={link__logo}
              alt="ссылка на переход"
            />
          </a>
          </li>
          <li>
          <a href="https://dashnik.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noopener noreferrer">
            Адаптивный сайт
            <img
              className="portfolio__logo"
              src={link__logo}
              alt="ссылка на переход"
            />
          </a>
          </li>
          <li>
          <a href="https://dashnik.github.io/mesto-react/" className="portfolio__link" target="_blank" rel="noopener noreferrer">
            Одностраничное приложение
            <img
              className="portfolio__logo"
              src={link__logo}
              alt="ссылка на переход"
            />
          </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Portfolio;

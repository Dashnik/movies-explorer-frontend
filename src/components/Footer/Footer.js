import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__line"></div>
      <p className="footer__logo">&copy; 2021 </p>
      <ul className="footer__links">
        <li>
          <a
            href="https://praktikum.yandex.ru/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Dashnik"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>
        </li>
        <li>
          <a
            href="http://linkedin.com/in/a-kovalev"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

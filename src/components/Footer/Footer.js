import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
     
      <p className="footer__title"> Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__logo">© 2021 </p>
        <Link to="/sign-up" className="footer__link">Яндекс.Практикум</Link>
        <Link to="/sign-up" className="footer__link">GitHub </Link>
        <Link to="/sign-up" className="footer__link"> LinkedIn</Link>
      </div>
    </footer>
  );
}

export default Footer;

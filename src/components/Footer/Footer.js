import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
     
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line"></div>
        <p className="footer__logo">© 2021 </p>
        <Link to="/sign-up" className="footer__link link1">Яндекс.Практикум</Link>
        <Link to="/sign-up" className="footer__link link2">GitHub </Link>
        <Link to="/sign-up" className="footer__link link3"> LinkedIn</Link>
    </footer>
  );
}

export default Footer;

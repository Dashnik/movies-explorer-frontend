import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
     
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line"></div>
      <p className="footer__logo">© 2021 </p>
      <ul className='footer__links'>
        <li>
          <Link to="/sign-up" className="footer__link">Яндекс.Практикум</Link>
        </li>
         <li>
          <Link to="/sign-up" className="footer__link">GitHub </Link>
        </li>
       <li>
          <Link to="/sign-up" className="footer__link"> LinkedIn</Link>
        </li>
      </ul>      
    </footer>
  );
}

export default Footer;

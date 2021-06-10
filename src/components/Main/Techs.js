import React from "react";
import "./Techs.css";

function Techs(props) {
  return (
    // <>
      <div className="techs" id="techs">
        <h1 className="techs__topic">Технологии</h1>
        <h1 className="techs__title">7 технологий</h1>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.{" "}
        </p>
        <ul className="techs__container">
          <li className="techs__link">HTML</li>
          <li className="techs__link">CSS</li>
          <li className="techs__link">JS</li>
          <li className="techs__link">React</li>
          <li className="techs__link">Git</li>
          <li className="techs__link">Express.js</li>
          <li className="techs__link">mongoDB</li>
        </ul>
      </div>
    // </>
  );
}

export default Techs;

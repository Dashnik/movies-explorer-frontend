import React from "react";
import './Techs.css';

function Techs(props) {

  return (
    <>
      <div className="techs" id="techs">
       <h1 className='techs__title'>Технологии</h1>
       <h1 className='techs__topic'>7 технологий</h1>
       <p className='techs__subtopic'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте. </p>
         <div className='techs__container'>
            <p className='techs__link'>HTML</p>
            <p className='techs__link'>CSS</p>
            <p className='techs__link'>JS</p>
            <p className='techs__link'>React</p>
            <p className='techs__link'>Git</p>
            <p className='techs__link'>Express.js</p>
            <p className='techs__link'>mongoDB</p>
         </div>
      </div>
    </>
  );
}

export default Techs;
import React from "react";
import './AboutProject.css';


function AboutProject(props) {

  return (
    <>
      <div className="AboutProject">
       <h2 className="AboutProject__title">О проекте</h2>
       <div className="AboutProject__container">
        <h3 className="AboutProject__subtitle">Дипломный проект включал 5 этапов
          <p className="AboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
       </h3>
       <h3 className="AboutProject__subtitle">На выполнение диплома ушло 5 недель
         <p className="AboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
       </h3>
       </div>
       <div className="AboutProject__container">
       <p className="AboutProject__progress-backend">1 неделя</p>
      
       <p className="AboutProject__progress-frontend">4 недели</p>
     
       </div>
       <div className="AboutProject__container">
       <p className="AboutProject__label">Back-end</p>
       <p className="AboutProject__label">Front-end</p>
       </div>
      </div>
    </>
  );
}

export default AboutProject;
import React from "react";
import './AboutProject.css';


function AboutProject(props) {

  return (
    <>
      <div className="aboutProject">
       <h2 className="aboutProject__title">О проекте</h2>
        <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
        <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
       <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
       <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
       <p className="aboutProject__progress-backend">1 неделя</p>      
       <p className="aboutProject__progress-frontend">4 недели</p>
       <p className="aboutProject__label">Back-end</p>
       <p className="aboutProject__label">Front-end</p>
      </div>
    </>
  );
}

export default AboutProject;
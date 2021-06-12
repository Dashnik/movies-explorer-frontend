import React from "react";
import './Main.css';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from "./Portfolio";

function Main(props) {

  return (
    // <>
      <main className="main">
        <NavTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
    // </>
  );
}

export default Main;
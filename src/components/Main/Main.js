import React from "react";
import './Main.css';
import NavTab from './NavTab';
import AboutProject from './AboutProject';

function Main(props) {

  return (
    <>
      <main className="main">
        <NavTab/>
        <AboutProject/>
      </main>
    </>
  );
}

export default Main;
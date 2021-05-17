import './App.css';
import React from "react";
import { Route, Switch  } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import AboutMe from '../Main/AboutMe';
// import Techs from '../Main/Techs';
// import AboutProject from '../Main/AboutProject';
// import NavTab from '../Main/NavTab';
// import Portfolio from '../Main/Portfolio';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';


function App() {

   // const [isMainPage, setIsMainPage] = React.useState(false);

   // const  handleMainPage = () =>{
   //    setIsMainPage(!isMainPage);
   // }

  return (
    <div className="page">
      <Switch>
         <Route path="/sign-in">
            <Login />
         </Route>
         <Route path="/sign-up">
            <Register/>
         </Route>
      <Route path="/">
         <Header login="Войти" signup="Регистрация"/>
         <Main/>
         <Footer/>  
      </Route> 
      </Switch>
      </div>
  );
}

export default App;

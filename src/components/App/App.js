import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile';
import PageNotFound from '../PageNotFound';

function App() {

  return (
    <div className="page">
      <Switch>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header login="Войти" signup="Регистрация" />
          <SavedMovies/>
          <Footer />
        </Route>
        <Route path="/profile">
          <Header login="Войти" signup="Регистрация" />
          <Profile/>
        </Route>
        <Route path="/error">
       <PageNotFound></PageNotFound>
        </Route>
        <Route path="/">
          <Header login="Войти" signup="Регистрация" />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

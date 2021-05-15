import './App.css';
import { Route, Switch  } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutMe from '../Main/AboutMe';
import Techs from '../Main/Techs';
import AboutProject from '../Main/AboutProject';
import NavTab from '../Main/NavTab';
import Portfolio from '../Main/Portfolio';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="page">
     <Header/>
     <Switch>
      <Route path="/sign-in">
         <Login/>
      </Route>
      <Route path="/sign-up" >
        <Register/>
      </Route>
      <Route path="/movies">
         {/* <Movies/> */}
      </Route>
      <Route path=" /saved-movies">
         {/* <SavedMovies/> */}
      </Route>
      <Route path=" /profile">
         {/* <Profile/> */}
      </Route>
      <Route path=" /">
         <Main/>
      </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

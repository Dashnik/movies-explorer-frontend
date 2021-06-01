import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile";
import PageNotFound from "../PageNotFound";
import BeatfilmMoviesApi from "../../utils/MoviesApi.js";
import { CurrentMoviesContext } from "../contexts/CurrentContext";

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesAfterSearch, setMoviesAfterSearch] = React.useState([]);

  React.useEffect(() => {
    BeatfilmMoviesApi.getAllMovies()
      .then((data) => {
        console.log(data);
        setAllMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  const handleSearchMovies = (name) => {
    const valueFromInput = name.toLowerCase().split(" ").join('');
    const currentMovies = [];
    allMovies.forEach(
      (movie) => {
        const stringDividedOnWord = movie.nameRU.toLowerCase().split(" ");
        if (stringDividedOnWord.includes(valueFromInput) === true) {
          currentMovies.push(movie);
        }
      }
    );
    setMoviesAfterSearch(currentMovies);
  };


  return (
    <CurrentMoviesContext.Provider value={moviesAfterSearch}>
      <div className="page">
        <Switch>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/movies">
            <Header isLogin={false} />
            <Movies
              handleSearchMovies={handleSearchMovies}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header isLogin={false} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header isLogin={false} />
            <Profile />
          </Route>
          <Route path="/error">
            <PageNotFound></PageNotFound>
          </Route>
          <Route path="/">
            <Header login="Войти" signup="Регистрация" isLogin={true} />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
    </CurrentMoviesContext.Provider>
  );
}

export default App;

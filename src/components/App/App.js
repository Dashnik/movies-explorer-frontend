import "./App.css";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
import { api } from "../../utils/MainApi.js";
import {
  CurrentMoviesContext,
  CurrentPreloaderContext,
  CurrentSavedMoviesContext,
  CurrentUserContext,
} from "../contexts/CurrentContext";
import Preloader from "../Movies/Preloader.js";
import ProtectedRoute from "../ProtectedRoute"; // импортируем HOC

function App() {
 // const [addMoviesYet, setAddMoviesYet] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesAfterSearch, setMoviesAfterSearch] = React.useState([]);
  const [isPreloaderWork, setIsPreloaderWork] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [listOfSavedMovies, setListOfSavedMovies] = React.useState([]);
  const [didYouDoSearch, setDidYouDoSearch] = React.useState(false);
  const [nextButtonVisible, setNextButtonVisible] = React.useState(false);
  

  const history = useHistory();

  React.useEffect(() => {
    BeatfilmMoviesApi.getAllMovies()
      .then((data) => {
        setAllMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    if(loggedIn){
      getSavedMovies();
    }
  }, [loggedIn]);

  function getSavedMovies() {
    const jwt = localStorage.getItem("token");

    api
      .getSavedMovies(jwt)
      .then((savedMovies) => {
        const ListOfSavedMoviesForUser = savedMovies.filter((movie) =>
        movie.owner === currentUser._id ? movie : '' 
         );
        setListOfSavedMovies(ListOfSavedMoviesForUser);
      })
      .catch((error) => {
        console.log(error);
      });   
  }

  // React.useEffect(() => {
  //   handleAddButton();
  // }, [moviesAfterSearch]);

  const handleSearchMovies = (name, isItShort) => {
    setIsPreloaderWork(true);
    const valueFromInput = name.name.toLowerCase().split(" ").join("");
    const currentMovies = [];

    // console.log(allMovies);
    if (isItShort) {
      allMovies.forEach((movie) => {
        const stringDividedOnWord = movie.nameRU.toLowerCase().split(" ");
        if (
          stringDividedOnWord.includes(valueFromInput) === true &&
          movie.duration <= 40
        ) {
          const newMovie = {
            country: String(movie.country),
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          };
          currentMovies.push(newMovie);
        }
      });
    } else {
      allMovies.forEach((movie) => {
        const stringDividedOnWord = movie.nameRU.toLowerCase().split(" ");
        if (
          stringDividedOnWord.includes(valueFromInput) === true &&
          movie.duration > 41
        ) {
          const newMovie = {
            country: String(movie.country),
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          };
          currentMovies.push(newMovie);
        }
      });
    }

     //получаю ширину экрана
     const width = document.body.getBoundingClientRect().width;

    // получаю число карточек из currentMovies
     const countOfCards = currentMovies.length;
     let firstCardsCount = 0;
     let nextCardsCount = 0;
     let shownCardsCount = 0;

    //ищу нужный мне интервал
    if (width > 769) {
      firstCardsCount = 16;
      nextCardsCount = 4;
    }else if (width > 480) {
      firstCardsCount = 8;
      nextCardsCount = 2;
    }else{
      firstCardsCount = 5;
      nextCardsCount = 1;
    }

    shownCardsCount = firstCardsCount;

    setNextButtonVisible(countOfCards > shownCardsCount);
    const cardsShownByDefault = currentMovies.slice(currentMovies, firstCardsCount); 
    const cardsToBeShown = currentMovies.slice(shownCardsCount, shownCardsCount + nextCardsCount);

    setIsPreloaderWork(false);
    setDidYouDoSearch(true);
    setMoviesAfterSearch(cardsShownByDefault);
    

    localStorage.setItem("moviesAfterSearch", JSON.stringify(cardsToBeShown));
  };

  function handleDataFromLocalStorage() {

    const isUserLogin = localStorage.getItem("moviesAfterSearch");

    if(isUserLogin){
      const moviesAfterSearchInLS = JSON.parse(
      localStorage.getItem("moviesAfterSearch")
    );
    setMoviesAfterSearch(moviesAfterSearchInLS);
  }
  }

  
  React.useEffect(() => {
      handleDataFromLocalStorage();
  }, []);

  // function handleAddButton() {
  //   //получаю ширину экрана
  //   const width = document.body.getBoundingClientRect().width;

  //   // получаю число карточек из moviesAfterSearch
  //   let countOfCards;

  //   if (moviesAfterSearch.length === 0) {
  //     countOfCards = 0;
  //   } else {
  //     countOfCards = moviesAfterSearch.length;
  //   }

  //   if (width > 769 && width < 1280) {
  //     if (countOfCards > 12) {

  //       setAddMoviesYet(true);
  //     }
  //   }

  //   if (width <= 768 && width > 480) {
  //     if (countOfCards > 9) {
  //       setAddMoviesYet(true);
  //     }
  //   }

  //   if (width < 479) {
  //     if (countOfCards > 5) {
  //       setAddMoviesYet(true);
  //     }
  //   }
  // }

  const handleAuth = (email, password) => {
    api
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
        
        tokenCheck();
        localStorage.setItem("moviesAfterSearch", "");
        localStorage.setItem("loggedIn", loggedIn);
      })
      .catch((error) => console.log(error));
  };

  const tokenCheck = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem("token");
    // проверим токен
    if (jwt) {
      api
        .getUser(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push("/movies");
            setCurrentUser(res);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const handleRegisterUser = (name, email, password) => {
    api
      .register(name, email, password)
      .then(() => {
        console.log("email:", email, "password:", password);
        handleAuth(email, password);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateUser = (values) => {
    const jwt = localStorage.getItem("token");
    api
      .setNewProfile(values.name, values.email, jwt)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () =>{
    history.push("/");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("moviesAfterSearch");
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  }
 
  function handleBookmarkClick(newMovie, isLiked) {
    const jwt = localStorage.getItem("token");

    if (isLiked) {
      api
        .deleteMovies(newMovie, jwt)
        .then((data) => {
          console.log("dataRemoving:", data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api
        .addingMovies(newMovie, jwt)
        .then((newCard) => {
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newListOfMovies = moviesAfterSearch.map((card) =>
            card.movieId === newCard.movieId ? newCard : card
          );

          // Обновляем стейт
          setMoviesAfterSearch(newListOfMovies);

          getSavedMovies();

          // setListOfSavedMovies(newCard);
          // console.log('listOfSavedMovies',listOfSavedMovies);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleDeleteMovieClick(movie) {
    const jwt = localStorage.getItem("token");

    api
      .deleteMovies(movie, jwt)
      .then(() => {
        const newListOfMovies = listOfSavedMovies.filter((r) =>
          r._id === movie._id ? "" : r
        );
        setListOfSavedMovies(newListOfMovies);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <CurrentMoviesContext.Provider value={moviesAfterSearch}>
      <CurrentPreloaderContext.Provider value={isPreloaderWork}>
        <CurrentSavedMoviesContext.Provider value={listOfSavedMovies}>
          <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
              <Switch>
                 <Route exact path="/">
                   <Header loggedIn={loggedIn} />
                  <Main />
                  <Footer />
                </Route>
                <Route path="/sign-in">
                  <Login onLogin={handleAuth} />
                </Route>
                <Route path="/sign-up">
                  <Register onRegister={handleRegisterUser} />
                </Route>
                <Route path="/movies">
                  <Header />
                  <Movies
                    handleSearchMovies={handleSearchMovies}
                  //  addMoviesYet={addMoviesYet}
                    onBookmarkClick={handleBookmarkClick}
                  />
                  <Preloader />
                  {didYouDoSearch && moviesAfterSearch.length === 0 ? (
                    <p className="searches__error searches__error-empty">
                      Ничего не найдено
                    </p>
                  ) : (
                    ""
                  )}
                  {nextButtonVisible ? (
                    <button
                      type="button"
                      className="moviesCardList__add_button"
                    >
                      <p className="moviesCardList__container">Ещё</p>
                    </button>
                  ) : (
                    ""
                  )}
                  <Footer />
                </Route>
                <Route path="/saved-movies">
                  <Header />
                  <SavedMovies onDeleteMovieClick={handleDeleteMovieClick} />
                  <Footer />
                </Route>
                {/* <ProtectedRoute path="/profile"
                component={Profile}
                onUpdateUser={handleUpdateUser}
                onSignOut={handleSignOut}
                >
                </ProtectedRoute>  */}
                <Route path="/profile">
                  <Header /> 
                  <Profile 
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleSignOut} />
                </Route> 
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </div>
          </CurrentUserContext.Provider>
        </CurrentSavedMoviesContext.Provider>
      </CurrentPreloaderContext.Provider>
    </CurrentMoviesContext.Provider>
  );
}

export default App;


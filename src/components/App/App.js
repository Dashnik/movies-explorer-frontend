import "./App.css";
import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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
import ProtectedRoute from "../ProtectedRoute"; // импортируем HOC
import {config} from "../../utils/config";

function App() {
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesProduction, setMoviesProduction] = React.useState([]);
  const [allCardsAfterSearch, setAllCardsAfterSearch] = React.useState([]);
  const [isPreloaderWork, setIsPreloaderWork] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [listOfSavedMovies, setListOfSavedMovies] = React.useState([]);
  const [savedMoviesShownByDefault, setSavedMoviesShownByDefault] = React.useState([]);

  const [didYouDoSearch, setDidYouDoSearch] = React.useState(false);
  const [nextButtonVisible, setNextButtonVisible] = React.useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = React.useState(false);
  const [firstCardsCount, setFirstCardsCount] = React.useState(0);
  const [shownCardsCount, setShownCardsCount] = React.useState(0);
  const [cardsShownByDefault, setCardsShownByDefault] = React.useState([]);
  const [authError, setAuthError] = React.useState(false);
  const [regError, setRegError] = React.useState(false);
  const currentPath = useLocation();
  const [disabledForm, setDisabledForm] = React.useState(false);
  // const [listSavedCardsAfterSearch, setListSavedCardsAfterSearch] = React.useState([]);
  // const [isSavedCardSearchCompleted, IsSavedCardSearchCompleted] = React.useState(false);

  
  
  const history = useHistory();
  React.useEffect(() => {}, [moviesProduction]);

function handleSearchMovies (name, isItShort) {
if (currentPath.pathname  === '/movies')
{
filterAllMovies(name, isItShort);
} else {
 filterSavedMovies(name, isItShort);
}
}

// React.useEffect(() => {
//   if(loggedIn){
//   getSavedMovies()
// }}, [listOfSavedMovies]);

  const filterAllMovies = (name, isItShort) => {
    setIsPreloaderWork(true);
    const valueFromInput = name.name.toLowerCase().split(" ").join("");

    const currentMovies = allMovies
      .filter((movie) =>
        isItShort ? movie.duration <= config.MAX_SHORT_MOVIE_DURATION : movie.duration > config.MAX_SHORT_MOVIE_DURATION
      )
      .filter((movie) => {
        const stringDividedOnWord = movie.nameRU.toLowerCase().split(" ");
        return stringDividedOnWord.some(
          (el) => el.indexOf(valueFromInput) > -1
        );
      })
      .map((movie) => {
        const savedMovie = listOfSavedMovies.find((savedItem) => {
          return savedItem.nameRU === movie.nameRU;
        });
        return {
          country: String(movie.country),
          director: String(movie.director),
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: movie.image
            ? `https://api.nomoreparties.co${movie.image.url}`
            : "",
          trailer: String(movie.trailerLink),
          thumbnail: movie.image
            ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
            : "",
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          owner: savedMovie?.owner,
          _id: savedMovie?._id,
        };
      });

    setAllCardsAfterSearch(currentMovies);
    setIsPreloaderWork(false);
    setDidYouDoSearch(true);

    localStorage.setItem("moviesAfterSearch", JSON.stringify(currentMovies));
  };

///////////////////////////////////////////
const filterSavedMovies = (name, isItShort) =>{

  setIsPreloaderWork(true);
  const valueFromInput = name.name.toLowerCase().split(" ").join("");
  
  const currentMovies = listOfSavedMovies
  .filter((movie) =>
  isItShort ? movie.duration <= 40 : movie.duration > 40
  )
  .filter((movie) => {
  const stringDividedOnWord = movie.nameRU.toLowerCase().split(" ");
  return stringDividedOnWord.some(
  (el) => el.indexOf(valueFromInput) > -1
  );
  })
  setSavedMoviesShownByDefault(currentMovies);

  setIsPreloaderWork(false);
  
  }
///////////////////////////////////////////

  React.useEffect(() => {
    handledMoviesFilter();
  }, [allCardsAfterSearch]);

  function handledMoviesFilter() {
    //получаю ширину экрана
    const width = document.body.getBoundingClientRect().width;

    //ищу нужный мне интервал
    if (width > config.DESKTOP_WIDTH) {
      setFirstCardsCount(config.DESKTOP_START_CARDS_COUNT);
    } else if (width >config.TABLET_WIDTH) {
      setFirstCardsCount(config.TABLET_START_CARDS_COUNT);
    } else {
      setFirstCardsCount(config.MOBILE_START_CARDS_COUNT);
    }
    setShownCardsCount(firstCardsCount);

    //устанавливаю нужное число карточек с фильмами
    const cardsShown = allCardsAfterSearch.slice(0, firstCardsCount);
    //записываю их в MoviesAfterSearch и передаю на рендеринг
    setMoviesProduction(cardsShown);
    setCardsShownByDefault(cardsShown);
  }

  React.useEffect(() => {
    const countOfCards = allCardsAfterSearch.length;
    let isAddButtonShowed = countOfCards > shownCardsCount;
    setNextButtonVisible(isAddButtonShowed);

    isAddButtonShowed = allCardsAfterSearch.length > cardsShownByDefault.length;
    setNextButtonVisible(isAddButtonShowed);
  }, [shownCardsCount, cardsShownByDefault]);

  function handleAddMoviesButton() {
    const width = document.body.getBoundingClientRect().width;
    let nextCardsCount;

    //ищу нужный мне интервал
    if (width > config.DESKTOP_WIDTH) {
      nextCardsCount = config.DESKTOP_NEXT_CARDS_COUNT;
    } else if (width > config.TABLET_WIDTH) {
      nextCardsCount = config.TABLET_NEXT_CARDS_COUNT;
    } else {
      nextCardsCount = config.MOBILE_NEXT_CARDS_COUNT;
    }

    setShownCardsCount(firstCardsCount);

    const cardsToBeShown = allCardsAfterSearch.slice(
      cardsShownByDefault.length,
      cardsShownByDefault.length + nextCardsCount
    );
    setCardsShownByDefault([...cardsShownByDefault, ...cardsToBeShown]);
    setMoviesProduction([...moviesProduction, ...cardsToBeShown]);
  }

  React.useEffect(() => {
    handleDataFromLocalStorage();
  }, []);

  function handleDataFromLocalStorage() {
    const isUserLogin = localStorage.getItem("moviesAfterSearch");

    if (isUserLogin) {
      const moviesAfterSearchInLS = JSON.parse(
        localStorage.getItem("moviesAfterSearch")
      );

      moviesAfterSearchInLS.forEach((element) => {
        const savedMovie = listOfSavedMovies.find((savedItem) => {
          return savedItem.nameRU === element.nameRU;
        });
        if (savedMovie) {
          element._id = savedMovie._id;
          element.owner = savedMovie.owner;
        }
      });

      setMoviesProduction(moviesAfterSearchInLS);
    }
  }

  React.useEffect(() => {
    handleDataFromLocalStorage();
  }, []);

  const handleAuth = (email, password) => {
    setDisabledForm(true);
    api
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);

        tokenCheck();
        localStorage.setItem("moviesAfterSearch", "");
        localStorage.setItem("loggedIn", loggedIn);
      })
      .catch((error) => {
        console.log(error)
        setAuthError(true);
      })
      .finally(()=>  setDisabledForm(false))
  };
  

  const tokenCheck = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem("token");
    // const path = window.location.pathname;
    // проверим токен
    if (jwt) {
      api
        .getUser(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);

            history.push("/movies");
            if (currentPath.pathname === "/saved-movies") {
              history.push("/saved-movies");
            } else if (currentPath.pathname === "/profile") {
              history.push("/profile");
            } else if (currentPath.pathname === "/") {
              history.push("/");
            }
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
    setDisabledForm(true);
    api
      .register(name, email, password)
      .then(() => {
        handleAuth(email, password);
        setAuthError(false);
      })
      .catch((error) => {
        console.log(error);
        setRegError(true);
      })
     .finally(()=>  setDisabledForm(false))
  };

  const handleUpdateUser = (values) => {

    setDisabledForm(true);

    const jwt = localStorage.getItem("token");
    api
      .setNewProfile(values.name, values.email, jwt)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsProfileUpdated(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>  setDisabledForm(false))
  };

  const handleSignOut = () => {
    history.push("/");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("moviesAfterSearch");
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  function handleBookmarkClick(newMovie, isLiked) {
    const jwt = localStorage.getItem("token");

    if (isLiked) {
      api
        .deleteMovies(newMovie, jwt)
        .then(() => {
          const deletedCard = listOfSavedMovies.find(
            (movie) => movie._id === newMovie._id
          );

          const newListSavedMovies = listOfSavedMovies.filter((r) => {
            return r._id === newMovie._id ? "" : r;
          });

          delete deletedCard._id;
          delete deletedCard.owner;
          delete deletedCard.__v;

          
          const moviesAfterSearchInLS =  JSON.parse(
            localStorage.getItem("moviesAfterSearch") || '[]'
          );

          const originalCard = moviesAfterSearchInLS.find(
            (item) => item.nameRU === newMovie.nameRU
          );
          delete originalCard?._id;
          delete originalCard?.owner;
          localStorage.setItem(
            "moviesAfterSearch",
            JSON.stringify(moviesAfterSearchInLS)
          );

          setListOfSavedMovies(newListSavedMovies);
          setSavedMoviesShownByDefault(newListSavedMovies);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      api
        .addingMovies(newMovie, jwt)
        .then((newCard) => {
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newListOfMovies = moviesProduction.map((card) =>
            card.movieId === newCard.movieId ? newCard : card
          );
          const moviesAfterSearchInLS = JSON.parse(
            localStorage.getItem("moviesAfterSearch")
          );
          const originalCard = moviesAfterSearchInLS.find(
            (item) => item.nameRU === newCard.nameRU
          );
          originalCard._id = newCard._id;
          originalCard.owner = newCard.owner;
          localStorage.setItem(
            "moviesAfterSearch",
            JSON.stringify(moviesAfterSearchInLS)
          );

          // Обновляем стейт
          setMoviesProduction(newListOfMovies);

          setListOfSavedMovies([...listOfSavedMovies, newCard]);
          setSavedMoviesShownByDefault([...listOfSavedMovies, newCard]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

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
    if (loggedIn) {
      getSavedMovies();
    }
  }, [loggedIn, currentUser]);

  function getSavedMovies() {
    const jwt = localStorage.getItem("token");
    
    api
      .getSavedMovies(jwt)
      .then((savedMovies) => {
        const listOfSavedMoviesForUser = savedMovies.filter((movie) =>
          movie.owner === currentUser._id ? movie : ""
        );
        setListOfSavedMovies(listOfSavedMoviesForUser);
        setSavedMoviesShownByDefault(listOfSavedMoviesForUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <CurrentMoviesContext.Provider value={moviesProduction}>
      <CurrentPreloaderContext.Provider value={isPreloaderWork}>
        <CurrentSavedMoviesContext.Provider value={savedMoviesShownByDefault}>
          <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
              <Switch>
                <Route exact path="/">
                  <Header loggedIn={loggedIn} />
                  <Main />
                  <Footer />
                </Route>
                <Route path="/sign-in">
                  <Login onLogin={handleAuth} 
                   authError={authError}
                   disabledForm={disabledForm}
                   />
                </Route>
                <Route path="/sign-up" >
                  <Register 
                  onRegister={handleRegisterUser}
                  regError={regError}
                  disabledForm={disabledForm}
                  />
                </Route>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  path="/movies"
                  component={Movies}
                  handleSearchMovies={handleSearchMovies}
                  onBookmarkClick={handleBookmarkClick}
                  didYouDoSearch={didYouDoSearch}
                  moviesAfterSearch={moviesProduction}
                  nextButtonVisible={nextButtonVisible}
                  handleAddMoviesButton={handleAddMoviesButton}
                ></ProtectedRoute>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  path="/saved-movies"
                  component={SavedMovies}
                  onDeleteMovieClick={handleBookmarkClick}
                  handleSearchMovies={handleSearchMovies}
                  // isSavedCardSearchCompleted={isSavedCardSearchCompleted}
                  // listSavedCardsAfterSearch={listSavedCardsAfterSearch}
                ></ProtectedRoute>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  path="/profile"
                  component={Profile}
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleSignOut}
                  isProfileUpdated={isProfileUpdated}
                  disabledForm={disabledForm}
                ></ProtectedRoute>
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

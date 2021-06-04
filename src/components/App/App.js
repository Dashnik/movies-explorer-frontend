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
import { apiAuth } from "../../utils/MainApi.js";
import { CurrentMoviesContext, CurrentPreloaderContext, CurrentBookmarkContext } from "../contexts/CurrentContext";
import Preloader from '../Movies/Preloader.js'; 

function App() {
  const [addMoviesYet, setAddMoviesYet] = React.useState(false);
  // const [isItShort, setIsItShort] = React.useState(true);
  const [allMovies, setAllMovies] = React.useState([]);
  const [moviesAfterSearch, setMoviesAfterSearch] = React.useState([]);
  const [isPreloaderWork, setIsPreloaderWork] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [isBookmarkSelected, setIsBookmarkSelected] = React.useState(false);
  // const [emptyCurrentMovie, setEmptyCurrentMovie] =React.useState(false);
  
  const history = useHistory();


// function handlePreloader(){
//   setIsPreloaderWork(!isPreloaderWork);
// }

  React.useEffect(() => {
    BeatfilmMoviesApi.getAllMovies()
      .then((data) => {
        // console.log(data);
        setAllMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  const handleSearchMovies = (name, isItShort) => {
   
    setIsPreloaderWork(true);
    const valueFromInput = name.name.toLowerCase().split(" ").join('');
    const currentMovies = [];

     // console.log(allMovies);
    if (isItShort){
      allMovies.forEach(
        (movie) => {
          const stringDividedOnWord = movie.nameRU.toLowerCase().split(" ");
          if (stringDividedOnWord.includes(valueFromInput) === true && movie.duration <= 40 ) {
              currentMovies.push(movie);    
          }
        }
      );
    }else{
    allMovies.forEach(
      (movie) => {
        const stringDividedOnWord = movie.nameRU.toLowerCase().split(" ");
        if (stringDividedOnWord.includes(valueFromInput) === true && movie.duration > 41) {

       
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
      }
    )}
     setIsPreloaderWork(false);
    setMoviesAfterSearch(currentMovies);
  };

  const handleAuth = ( email, password ) => {
    apiAuth
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);

        localStorage.setItem("email", email);

        tokenCheck();
      })
      .catch((error) => console.log(error));
  };

  const tokenCheck = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem("token");
    // проверим токен
    if (jwt) {
      apiAuth.getContent(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push("/movies");
          setCurrentUser(res);
        }
        
      })
      .catch(error => console.log(error));
    }
  };

  React.useEffect(() =>{
    tokenCheck();
  }, [])

  const handleRegisterUser = ( name, email, password ) => {

    apiAuth
      .register(name,email, password)
      .then(() => {
        history.push("/movies");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleBookmarkClick(newMovie, isLiked) {
    const jwt = localStorage.getItem("token");
    
    if (isLiked) {
      console.log('newMovie',newMovie);
      console.log('newMovie',newMovie._id);
      apiAuth
        .deleteMovies(newMovie, jwt)
        .then((data) => {
           console.log('dataRemoving:', data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiAuth
        .addingMovies(newMovie, jwt)
        .then((newCard) => {
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newListOfMovies = moviesAfterSearch.map((card) => (card.movieId === newCard.movieId ? newCard : card));
        
          // Обновляем стейт
          setMoviesAfterSearch(newListOfMovies);

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  
  
  return (
    <CurrentMoviesContext.Provider value={moviesAfterSearch}>
      <CurrentPreloaderContext.Provider value={isPreloaderWork}>
      <CurrentBookmarkContext.Provider value={isBookmarkSelected}>
      <div className="page">
        <Switch>
          <Route path="/sign-in">
            <Login onLogin={handleAuth}/>
          </Route>
          <Route path="/sign-up">
            <Register onRegister={handleRegisterUser} />
          </Route>
          <Route path="/movies">
            <Header loggedIn={false} />
            <Movies
              handleSearchMovies={handleSearchMovies}
              addMoviesYet={addMoviesYet}
              onBookmarkClick={handleBookmarkClick}
/>
             <Preloader/> 
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header loggedIn={false} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header loggedIn={false} />
            <Profile />
          </Route>
          <Route path="/error">
            <PageNotFound></PageNotFound>
          </Route>
          <Route path="/">
            <Header login="Войти" signup="Регистрация" loggedIn={true} />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
      </CurrentBookmarkContext.Provider>
      </CurrentPreloaderContext.Provider>
    </CurrentMoviesContext.Provider>
  );
}

export default App;

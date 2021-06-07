import React from 'react';
import './SavedMovies.css';
import SearchesForm from '../Movies/SearchesForm';
import SavedMoviesCardList from './SavedMoviesCardList';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies (props) {
  return (
    <>
    <Header />
    <div className="savedMovies">
      <SearchesForm></SearchesForm>
      <SavedMoviesCardList
      onDeleteMovieClick={props.onDeleteMovieClick}/>    
    </div>
    <Footer />
    </>
  )
}

export default SavedMovies;
import React, { useState } from 'react';
import MoviesContext from '../contexts/MoviesContext';

const CarouselState = props => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [latestSeries, setLatestSeries] = useState([]);
  const getLatestMovies = async () => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:3000/api/v1/movies/getlatestmovies", requestOptions)
        .then(response => response.json())
        .then(result => setLatestMovies(result.movies))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }

  const getLatestSeries = async () => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:3000/api/v1/movies/getlatesttvseries", requestOptions)
        .then(response => response.json())
        .then(result => setLatestSeries(result.series))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }

  const getMovie = async (movieid, setWatchMovie) => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch(`http://127.0.0.1:3000/api/v1/movies/getmovie/${movieid}`, requestOptions)
        .then(response => response.json())
        .then(result => setWatchMovie(result.movie))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <MoviesContext.Provider value={{ latestMovies, getLatestMovies, getLatestSeries, latestSeries, getMovie }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default CarouselState;

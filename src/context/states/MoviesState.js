import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import MoviesContext from '../contexts/MoviesContext';
// import { CommonActions, useNavigation } from '@react-navigation/native';

const CarouselState = props => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [latestSeries, setLatestSeries] = useState([]);
  // const navigation = useNavigation();
  const getLatestMovies = async () => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };

      fetch(
        'http://127.0.0.1:3000/api/v1/movies/getlatestmovies',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => setLatestMovies(result.movies))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const getLatestSeries = async () => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };

      fetch(
        'http://127.0.0.1:3000/api/v1/movies/getlatesttvseries',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => setLatestSeries(result.series))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const getMovie = async (movieid, setWatchMovie) => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };

      fetch(
        `http://127.0.0.1:3000/api/v1/movies/getmovie/${movieid}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => setWatchMovie(result.movie))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const onRatingSubmit = async (
    movieid,
    ratings,
    setRateNowVisible,
    setRated,
    watchMovie,
  ) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      const myHeaders = new Headers();
      myHeaders.append('authtoken', token);
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        movie: movieid,
        rating: ratings,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://127.0.0.1:3000/api/v1/movies/addrating', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          watchMovie.rating = watchMovie.rating + ratings;
          watchMovie.totalratings = watchMovie.totalratings + 1;
          setRated(true);
          setRateNowVisible(false);
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const getRating = async (movieid, setRated, setDefaultRating) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return;
      }

      const myHeaders = new Headers();
      myHeaders.append('authtoken', token);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(
        `http://127.0.0.1:3000/api/v1/movies/getratedmovie/${movieid}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          if (!result) {
            setRated(false);
          }

          if (result.rating) {
            setRated(true);
            setDefaultRating(result.rating);
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (query, setSearchedItems) => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };

      fetch(
        `http://127.0.0.1:3000/api/v1/movies/searchmovie/${query}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          if (result.movies) {
            setSearchedItems(result.movies);
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async (review, movieId, setComment, setReviewVisible) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return Alert.alert('Please login first');
      }

      const myHeaders = new Headers();
      myHeaders.append('authtoken', token);
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        review: review,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        `http://127.0.0.1:3000/api/v1/movies/addreview/${movieId}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          if (result === true) {
            Alert.alert('Review added.');
            setComment('');
            setReviewVisible(false);
          }

          if (result.error) {
            Alert.alert(result.error);
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieReviews = async (movieId, setReviews) => {
    try {
      const requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };

      fetch(
        `http://127.0.0.1:3000/api/v1/movies/getmoviereviews/${movieId}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => setReviews(result.reviews))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MoviesContext.Provider
      value={{
        latestMovies,
        getLatestMovies,
        getLatestSeries,
        latestSeries,
        getMovie,
        onRatingSubmit,
        getRating,
        searchMovie,
        addReview,
        getMovieReviews
      }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default CarouselState;

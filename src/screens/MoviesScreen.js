import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import MoviesContext from '../context/contexts/MoviesContext';
import WatchMovieContext from '../context/contexts/WatchMovieContext';

const MoviesScreen = () => {
  const route = useRoute();
  const {movies, setMoviesItems} = useContext(MoviesContext);

  const {setWatchMovie, watchMovie} = useContext(WatchMovieContext);

  useEffect(() => {
    setMoviesItems();
    const searchMovie = movies.filter(ele => {
      if (ele._id === route.params.movieID) {
        setWatchMovie(ele);
        return true;
      }
      return false;
    });
  }, []);


  return (
    <View>
      <Text>MoviesScreen</Text>
    </View>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({});

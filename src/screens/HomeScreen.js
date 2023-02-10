import {ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Carousel from '../components/Carousel';
import MovieCarousel from '../components/MovieCarousel';
import MoviesContext from '../context/contexts/MoviesContext';

const HomeScreen = () => {
  const {setMoviesItems, movies} = useContext(MoviesContext);
  useEffect(() => {
    setMoviesItems();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Carousel />
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel title="Today's Most Rated" data={movies} />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel title="Recommended for you" data={movies} />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel title="Popular Movies" data={movies} />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel title="Popular TV-Series" data={movies} />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel title="Most Rated Movies" data={movies} />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel title="Most Rated TV-Series" data={movies} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import { ScrollView, StyleSheet, SafeAreaView, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Carousel from '../components/Carousel';
import MovieCarousel from '../components/MovieCarousel';
import MoviesContext from '../context/contexts/MoviesContext';
import OttContext from '../context/contexts/OttContext';
import CastAndDirectorContext from '../context/contexts/CastAndDirectorContext';
import UserContext from '../context/contexts/UserContext';

const HomeScreen = () => {
  const {
    getLatestMovies,
    latestMovies,
    getLatestSeries,
    latestSeries,
    getMostRatedMovies,
    mostRatedMovies,
    getMostRatedSeries,
    mostRatedSeries,
  } = useContext(MoviesContext);
  const { setOttMovies } = useContext(OttContext);
  const { isLoggedin, getUser } = useContext(UserContext);
  useEffect(() => {
    setOttMovies();
    isLoggedin();
    getUser();
    getLatestMovies();
    getLatestSeries();
    getMostRatedMovies();
    getMostRatedSeries();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Carousel />
        {/* <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel key={0} title="Recommended for you" type="latestmovie" data={latestMovies} />
        </View> */}
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel
            key={1}
            title="Latest Movies"
            type="latestmovie"
            data={latestMovies}
          />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel
            key={2}
            title="Latest TV-Series"
            type="latestseries"
            data={latestSeries}
          />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel
            key={3}
            title="Most Rated Movies"
            type="latestmovie"
            data={mostRatedMovies}
          />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            marginTop: 20,
          }}>
          <MovieCarousel
            key={4}
            title="Most Rated TV-Series"
            type="latestseries"
            data={mostRatedSeries}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

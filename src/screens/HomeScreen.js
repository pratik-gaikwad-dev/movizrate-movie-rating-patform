import { ScrollView, StyleSheet, SafeAreaView, View, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import MovieCarousel from '../components/MovieCarousel';
import MoviesContext from '../context/contexts/MoviesContext';
import OttContext from '../context/contexts/OttContext';
import UserContext from '../context/contexts/UserContext';

const HomeScreen = () => {
  const {
    latestMovies,
    latestSeries,
    mostRatedMovies,
    mostRatedSeries,
    getHomeMovies
  } = useContext(MoviesContext);
  // const { setOttMovies } = useContext(OttContext);
  const { isLoggedin, getUser } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // setOttMovies();
    isLoggedin();
    getUser();
    getHomeMovies(setIsLoading);
  }, []);

  return (
    <SafeAreaView>
      {isLoading === true ? <ActivityIndicator size="large" style={{ height: "100%"}} /> :
      <ScrollView>
        <Carousel isLoading={isLoading}/>
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
      </ScrollView>}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

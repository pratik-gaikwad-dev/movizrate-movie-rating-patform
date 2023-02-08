import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CarouselCard from '../components/CarouselCard';
import Carousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Carousel />
        <MovieCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

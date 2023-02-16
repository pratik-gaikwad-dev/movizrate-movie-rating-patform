import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = props => {
  return (
    <View>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 20,
          color: 'black',
          paddingTop: 5,
        }}>
        {props.title}
      </Text>
      <View style={{paddingTop: 5}}>
        <FlatList
          data={props.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={element => {
            return (
              <MovieCard
                rating={element.item.rating}
                name={element.item.name}
                image={element.item.posterImage}
                _id={element.item._id}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default MovieCarousel;

const styles = StyleSheet.create({});

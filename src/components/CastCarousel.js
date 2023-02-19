import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CastCard from './CastCard';

const CastCarousel = props => {
  return (
    <View>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 20,
          color: 'black',
          paddingLeft: 10,
          paddingTop: 10,
        }}>
        {props.title}
      </Text>
      <View>
        <FlatList
          data={props.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={element => {
            return (
              <CastCard name={element.item.name} image={element.item.image} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default CastCarousel;

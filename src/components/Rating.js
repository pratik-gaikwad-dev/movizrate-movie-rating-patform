import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';

const Rating = props => {
  return (
    <View style={{flex: 0, flexDirection: 'row'}}>
      {props.maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            style={{marginLeft: 5}}
            onPress={() => props.setDefaultRating(item)}>
            {item <= props.defaultRating ? (
              <Icons name="star" size={25} color={'#24baef'} />
            ) : (
              <Icons name="star-o" size={25} color={'#24baef'} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Rating;

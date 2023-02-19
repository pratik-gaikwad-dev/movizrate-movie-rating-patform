import {View, Text, Image} from 'react-native';
import React from 'react';

const CastCard = props => {
  return (
    <View
      style={{
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 20,
        marginRight: 10,
      }}>
      <View>
        <View>
          <Image
            style={{height: 150, width: 120}}
            source={{uri: props.image}}
          />
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{color: 'black'}}>
            {props.name.length > 15
              ? props.name.slice(0, 15) + '...'
              : props.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CastCard;

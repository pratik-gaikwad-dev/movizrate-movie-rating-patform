import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AgeCard = props => {
  // console.log(props.rating);
  return (
    <TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: 'gray',
            padding: 20,
            borderRadius: 5,
            backgroundColor: '#edf0f0',
          }}>
          <View>
            <Text style={{ color: 'black', fontSize: 20 }}>{props.title}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}><Icon name="star" size={25} color={'#a8870f'} /> {'  '} {props.rating ? props.rating : 0}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AgeCard;

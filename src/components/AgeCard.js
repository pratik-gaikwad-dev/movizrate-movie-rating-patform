import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const AgeCard = props => {
  return (
    <TouchableOpacity>
      <View style={{marginTop: 10}}>
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
            <Text style={{color: 'black', fontSize: 15}}>{props.title}</Text>
          </View>
          <View>
            <Icon name="chevron-right" size={20} color="gray" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AgeCard;

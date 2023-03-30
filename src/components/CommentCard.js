import {
  View,
  Text,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const CommentCard = (props) => {
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          padding: 10,
          borderColor: 'black',
          borderWidth: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{ color: 'black' }}>{props.name}</Text>
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="star" size={25} color={'#24baef'} />
          <Text style={{ color: 'black', alignSelf: 'center', fontSize: 20 }}>
            {' '}
            {props.rating}
          </Text>
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          borderColor: 'black',
          borderWidth: 1,
          borderTopWidth: 0,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Text style={{ color: 'gray', textAlign: 'justify' }}>
          {props.review}
        </Text>
      </View>
    </View>
  );
};

export default CommentCard;

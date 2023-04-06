import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const MovieCard = props => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.push('MovieScreen', { movieID: props._id, type: props.type })}>
      <View style={{ height: windowWidth / 1.5, width: windowWidth / 2.2 }}>
        <View
          style={{
            width: windowWidth / 2.5,
            height: windowWidth / 1.6,
            backgroundColor: 'white',
            shadowColor: 'black',
            elevation: 4,
            shadowOpacity: 0.3,
            borderRadius: 10,
            shadowOffset: {
              height: 2,
              width: 2,
            },
          }}>
          <Image
            style={{
              width: '100%',
              height: '75%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={{
              uri: props.image,
            }}
          />
          <View>
            <Text style={{ padding: 5, fontSize: 12, color: "black" }} variant="titleLarge">
              <MaterialCommunityIcons name="star" color="#a8870f" />{' '}
              {props.rating ? props.rating.toFixed(1) : 0}
            </Text>
            <Text style={{ padding: 5, color: 'black' }} variant="bodyMedium">
              {props.name.length > 18
                ? props.name.slice(0, 18) + '...'
                : props.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});

import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const MovieCard = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <Card
      style={{
        width: windowWidth / 2.5,
        height: windowWidth/1.5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 0,
      }}
      elevation={0}>
      <View>
        <Card.Cover 
          source={{
            uri: 'https://images.unsplash.com/photo-1674690017732-63c3c5f8088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
          }}
        />
      </View>
      <View>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </View>
    </Card>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});

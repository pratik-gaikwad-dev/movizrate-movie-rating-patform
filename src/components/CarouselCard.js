import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Button,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card, Text} from 'react-native-paper';

const CarouselCard = props => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const btnColor = Platform.OS === 'ios' ? 'white' : '#24baef';
  const bgColor = Platform.OS === 'ios' ? '#24baef' : '';
  return (
    <Card
      elevation={0}
      style={{borderRadius: 0, width: windowWidth, padding: 10}}>
      <ImageBackground
        style={{borderBottomEndRadius: 0, height: windowHeight / 3.5}}
        source={{uri: props.image}}>
        <View
          style={{
            height: '100%',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              padding: 20,
            }}>
            <Text
              style={{color: 'white', paddingBottom: 10, fontWeight: 'bold'}}
              variant="titleLarge">
              {props.title}
            </Text>
            <Text
              style={{color: 'white', paddingBottom: 10}}
              variant="bodyMedium">
              {props.title}
            </Text>
            <View style={{backgroundColor: bgColor}}>
              <Button
                title="See Full Details"
                color={btnColor}
                onPress={() => console.log('pressed')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Card>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({});

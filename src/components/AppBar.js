import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import WatchMovieContext from '../context/contexts/WatchMovieContext';

const AppBar = () => {
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const navigation = useNavigation();

  const {watchMovie} = useContext(WatchMovieContext);

  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Appbar.Content title={watchMovie.name} subtitle={'Subtitle'} />
      <Appbar.Action icon={'magnify'} onPress={() => {navigation.navigate("Search")}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({});

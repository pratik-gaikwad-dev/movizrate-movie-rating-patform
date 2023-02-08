import {StyleSheet} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';

const AppBar = () => {
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          console.log('pressed');
        }}
      />
      <Appbar.Content title="Title" subtitle={'Subtitle'} />
      <Appbar.Action icon={'magnify'} onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({});

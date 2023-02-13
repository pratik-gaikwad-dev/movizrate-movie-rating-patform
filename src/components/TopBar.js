import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserAccount from '../screens/UserAccount';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Image} from 'react-native';
import PlaylistScreen from '../screens/PlaylistScreen';
const TopTab = createMaterialTopTabNavigator();

const TopBar = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {
          width: '100%',
        },
      }}>
      <TopTab.Screen
        name="Prime Video"
        style={{borderWidth: 1, borderColor: 'red'}}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 30, width: 100}}
              source={require('../../assets/icons/Prime_Video.png')}
            />
          ),
        }}
        component={PlaylistScreen}
      />
      <TopTab.Screen
        name="Netflix"
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 80}}
              source={require('../../assets/icons/Netflix.png')}
            />
          ),
        }}
        component={PlaylistScreen}
      />
      <TopTab.Screen
        name="Hotstar"
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 80}}
              source={require('../../assets/icons/Disney_Plus.png')}
            />
          ),
        }}
        component={PlaylistScreen}
      />
    </TopTab.Navigator>
  );
};

export default TopBar;

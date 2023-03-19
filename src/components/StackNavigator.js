import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import AppBar from './AppBar';
import { useRoute } from '@react-navigation/native';
import OTPScreen from '../screens/OTPScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const route = useRoute();
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <AppBar {...props} title={''} /> }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="MovieScreen"
        options={{ headerTitle: 'Movie' }}
        component={MoviesScreen}
      />
      <Stack.Screen
        name="OTPScreen"
        options={{ headerShown: false }}
        component={OTPScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

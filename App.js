import {StyleSheet} from 'react-native';
import React from 'react';
import SearchScreen from './src/screens/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaylistScreen from './src/screens/PlaylistScreen';
import UserAccount from './src/screens/UserAccount';
import {Provider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CarouselState from './src/context/states/CarouselState';
import MoviesState from './src/context/states/MoviesState';
import PlaylistState from './src/context/states/PlaylistState';
import InFutureScreen from './src/screens/InFutureScreen';
import StackNavigator from './src/components/StackNavigator';
import WatchMovieState from './src/context/states/WatchMovieState';
import InFutureStates from './src/context/states/InFutureStates';
import OttState from './src/context/states/OttState';
import CastAndDirectorState from './src/context/states/CastAndDirectorState';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <CarouselState>
          <MoviesState>
            <PlaylistState>
              <WatchMovieState>
                <InFutureStates>
                  <OttState>
                    <CastAndDirectorState>
                      <Tab.Navigator
                        screenOptions={{
                          tabBarActiveTintColor: '#24baef',
                          tabBarInactiveTintColor: 'black',
                        }}
                        initialRouteName="Home">
                        <Tab.Screen
                          name="Home"
                          options={{
                            headerShown: false,
                            tabBarLabel: 'Home',
                            tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={25}
                              />
                            ),
                          }}
                          component={StackNavigator}
                        />
                        <Tab.Screen
                          name="Search"
                          options={{
                            headerShown: false,
                            tabBarLabel: 'Search',
                            tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons
                                name="magnify"
                                color={color}
                                size={25}
                              />
                            ),
                          }}
                          component={SearchScreen}
                        />
                        <Tab.Screen
                          name="Upcomming"
                          options={{
                            headerShown: false,
                            tabBarLabel: 'In Future',
                            tabBarIcon: ({color}) => (
                              <MaterialIcons
                                name="watch-later"
                                color={color}
                                size={25}
                              />
                            ),
                          }}
                          component={InFutureScreen}
                        />
                        <Tab.Screen
                          name="Playlist"
                          options={{
                            headerShown: false,
                            tabBarLabel: 'Playlist',
                            tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons
                                name="playlist-play"
                                color={color}
                                size={25}
                              />
                            ),
                          }}
                          component={PlaylistScreen}
                        />
                        <Tab.Screen
                          name="You"
                          options={{
                            headerShown: false,
                            tabBarLabel: 'You',
                            tabBarIcon: ({color}) => (
                              <MaterialCommunityIcons
                                name="account-circle"
                                color={color}
                                size={25}
                              />
                            ),
                          }}
                          component={UserAccount}
                        />
                      </Tab.Navigator>
                    </CastAndDirectorState>
                  </OttState>
                </InFutureStates>
              </WatchMovieState>
            </PlaylistState>
          </MoviesState>
        </CarouselState>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

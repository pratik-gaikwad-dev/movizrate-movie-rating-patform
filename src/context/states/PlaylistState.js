import React, { useState } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import config from '../../config.json';

const PlaylistState = props => {
  const [playlist, setPlaylist] = useState([]);
  const [refreshPlaylist, setRefreshPlaylist] = useState(0);
  const setPlaylistItems = async () => {
    try {

      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return Alert.alert('Please login first');
      }

      const myHeaders = new Headers();
      myHeaders.append("authtoken", token);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/getallplaylistmovies`, requestOptions)
        .then(response => response.json())
        .then(result => setPlaylist(result.playlist))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const addInPlaylist = async (movieId, setVisible) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return Alert.alert('Please login first');
      }

      var myHeaders = new Headers();
      myHeaders.append('authtoken', token);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(
        `${config.server.host}/api/v1/movies/addinplaylist/${movieId}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          if (result === true) {
            setVisible(false);
            setRefreshPlaylist(refreshPlaylist + 1);
            return Alert.alert("Movie added in Watchlist");
          }
          if (result.error) {
            setVisible(false)
            return Alert.alert(result.error);
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromPlaylist = async (movieID, setVisible) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return Alert.alert("Please login first");
      }
      const myHeaders = new Headers();
      myHeaders.append("authtoken", token);

      const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/deletefromplaylist/${movieID}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result === true) {
            setVisible(false)
            setRefreshPlaylist(refreshPlaylist + 1);
            return Alert.alert("Movie deleted successfully");
          }

          if (result.error) {
            return Alert.alert(result.error)
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlaylistContext.Provider
      value={{ playlist, setPlaylistItems, deleteFromPlaylist, addInPlaylist, refreshPlaylist }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistState;

import React, { useContext, useState } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import config from '../../config.json';
import MoviesContext from '../contexts/MoviesContext';

const PlaylistState = props => {
  const [playlist, setPlaylist] = useState([]);
  const [refreshPlaylist, setRefreshPlaylist] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [internetWorking, setinternetWorking] = useState(true);
  const [changed, setChanged] = useState(false);

  const { setPlaylistLoading } = useContext(MoviesContext);

  if (changed) {
    setTimeout(() => {
        if (isLoading === true) {
            setinternetWorking(false);
        }
    }, 10000);
    setChanged(false);
}

  const setPlaylistItems = async () => {
    try {

      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return Alert.alert('Please login first');
      }
      setIsLoading(true);

      const myHeaders = new Headers();
      myHeaders.append("authtoken", token);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/getallplaylistmovies`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setPlaylist(result.playlist);
          setIsLoading(false);
        })
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
      setPlaylistLoading(true);
      setIsLoading(true);
      setChanged(true);

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
            setIsLoading(false);
            setPlaylistLoading(false)
            return Alert.alert("Movie added in Watchlist");
          }
          if (result.error) {
            setVisible(false);
            setIsLoading(false);
            setPlaylistLoading(false)
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
      setIsLoading(true);
      setChanged(true);
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
            setIsLoading(false);
            return Alert.alert("Movie deleted successfully");
          }

          if (result.error) {
            setIsLoading(false);
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
      value={{ playlist, setPlaylistItems, deleteFromPlaylist, addInPlaylist, refreshPlaylist, isLoading, internetWorking, setinternetWorking }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistState;

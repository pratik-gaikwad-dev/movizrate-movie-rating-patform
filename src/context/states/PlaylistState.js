import React, { useState } from 'react';
import PlaylistContext from '../contexts/PlaylistContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlaylistState = props => {
  const [playlist, setPlaylist] = useState([]);
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

      fetch("http://127.0.0.1:3000/api/v1/movies/getallplaylistmovies", requestOptions)
        .then(response => response.json())
        .then(result => setPlaylist(result.playlist))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromPlaylist = _id => {
    const itemIndex = playlist.findIndex(ele => ele._id === _id);
    console.log(itemIndex);
    playlist.splice(itemIndex, 1);
    const newPlaylist = playlist.filter(item => item._id !== _id);
    setPlaylist(newPlaylist);
  };

  return (
    <PlaylistContext.Provider
      value={{ playlist, setPlaylistItems, deleteFromPlaylist }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistState;

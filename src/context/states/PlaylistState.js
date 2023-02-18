import React, {useState} from 'react';
import PlaylistContext from '../contexts/PlaylistContext';

const PlaylistState = props => {
  const [playlist, setPlaylist] = useState([]);
  const setPlaylistItems = props => {
    setPlaylist([
      {
        _id: '1',
        image: 'https://wallpapers.com/images/featured/tzhfez1w8ud2z8aw.jpg',
        posterImage:
          'https://www.gamespot.com/a/uploads/original/1557/15576725/3348720-deadpool-1080750.jpeg',
        name: 'Deadpool',
        rating: 4.2,
        usrRatings: 8,
        genre: 'Action Comedy',
      },
      {
        _id: '2',
        image:
          'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/45285862-7bdf-44e8-bb22-1ea074003ca6/new-poster-art-for-ant-man-and-the-wasp-quantumania.jpg',
        name: 'Ant-Man and the Wasp: Quantumania',
        posterImage:
          'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b9/Ant-Man_and_the_Wasp_Quantumania_Poster_Tall.jpg/revision/latest?cb=20230110033912',
        rating: 4.3,
        usrRatings: 7,
        genre: 'Action Comedy',
      },
      {
        _id: '3',
        image: 'https://m.media-amazon.com/images/I/71LPURVJypL._SL1500_.jpg',
        name: 'Thor: Love and Thunder',
        posterImage:
          'https://m.media-amazon.com/images/I/91n6C5xJssL._SY679_.jpg',
        rating: 4.4,
        usrRatings: 9,
        genre: 'Action Comedy',
      },
    ]);
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
      value={{playlist, setPlaylistItems, deleteFromPlaylist}}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistState;

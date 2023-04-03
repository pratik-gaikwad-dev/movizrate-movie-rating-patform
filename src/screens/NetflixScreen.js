import { FlatList } from 'react-native';
import React, { useContext, useEffect } from 'react';
import OttContext from '../context/contexts/OttContext';
import PlaylistCard from '../components/PlaylistCard';

const NetflixScreen = () => {
  const { setOttMovies, netflix } = useContext(OttContext);
  useEffect(() => {
    setOttMovies();
  }, []);
  return (
    <FlatList
      data={netflix}
      showsHorizontalScrollIndicator={false}
      renderItem={element => {
        return (
          <PlaylistCard
            rating={element.item.rating}
            name={element.item.name}
            image={element.item.posterImage}
            genre={element.item.genre}
            usrRatings={false}
            id={element.item._id}
            showMenu={false}
          />
        );
      }}
    />
  );
};

export default NetflixScreen;

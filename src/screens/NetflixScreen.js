import { FlatList, View, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect } from 'react';
import OttContext from '../context/contexts/OttContext';
import PlaylistCard from '../components/PlaylistCard';

const NetflixScreen = () => {
  const { isLoading, netflix } = useContext(OttContext);
  useEffect(() => {
    // setOttMovies();
  }, []);
  return (
    <View>
      {isLoading === true ? (
        <ActivityIndicator size="large" style={{ height: '100%' }} />
      ) : (
        <FlatList
          data={netflix}
          showsHorizontalScrollIndicator={false}
          renderItem={element => {
            return (
              <PlaylistCard
                rating={element.item.rating}
                totalrating={element.item.totalratings}
                name={element.item.name}
                image={element.item.posterImage}
                genre={element.item.genre}
                usrRatings={false}
                id={element.item._id}
                showMenu={false}
              />
            );
          }}
        />)}
    </View>
  );
};

export default NetflixScreen;

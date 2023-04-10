import { FlatList, View, ActivityIndicator } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import OttContext from '../context/contexts/OttContext';
import PlaylistCard from '../components/PlaylistCard';
import InternetScreen from './InternetScreen';

const DisneyScreen = () => {
  const { isLoading, disney } = useContext(OttContext);
  const [internetWorking, setinternetWorking] = useState(true)
  useEffect(() => {
    // setOttMovies();
    setTimeout(() => {
      if (isLoading === true) {
        setinternetWorking(false);
      }
    }, 10000);
  }, []);
  return (
    <View>
      {isLoading === true ? internetWorking === false ? <InternetScreen /> : (
        <ActivityIndicator size="large" style={{ height: '100%' }} />
      ) : (
        <FlatList
          data={disney}
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

export default DisneyScreen;

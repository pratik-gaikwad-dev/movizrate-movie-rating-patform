import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import PlaylistCard from '../components/PlaylistCard';
import PlaylistContext from '../context/contexts/PlaylistContext';

const PlaylistScreen = () => {
  const {playlist, setPlaylistItems} = useContext(PlaylistContext);
  useEffect(() => {
    setPlaylistItems();
  }, []);

  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <FlatList
          data={playlist}
          showsHorizontalScrollIndicator={false}
          renderItem={element => {
            return (
              <PlaylistCard
                rating={element.item.rating}
                name={element.item.name}
                image={element.item.posterImage}
                genre={element.item.genre}
                usrRatings={element.item.usrRatings}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({});

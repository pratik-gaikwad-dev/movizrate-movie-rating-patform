import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import PlaylistCard from '../components/PlaylistCard';
import PlaylistContext from '../context/contexts/PlaylistContext';

const PlaylistScreen = () => {
  const {playlist, setPlaylistItems} = useContext(PlaylistContext);
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    setPlaylistItems();
  }, []);

  return (
    <SafeAreaView>
      <View style={{height: windowHeight}}>
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
                id={element.item._id}
                showMenu={true}
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

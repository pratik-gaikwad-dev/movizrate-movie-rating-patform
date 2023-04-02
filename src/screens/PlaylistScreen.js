import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import PlaylistContext from '../context/contexts/PlaylistContext';
import UserContext from '../context/contexts/UserContext';
import { Text } from 'react-native-paper';

const PlaylistScreen = () => {
  const { playlist, setPlaylistItems, refreshPlaylist } = useContext(PlaylistContext);

  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    setPlaylistItems();
  }, [refreshPlaylist]);

  const { loggedin } = useContext(UserContext);
  return (
    <SafeAreaView>
      {playlist.length === 0 ? (
        <View
          style={{
            flex: 0,
            justifyContent: 'center',
            alignSelf: 'center',
            height: '100%',
          }}>
          <Text>No items added in playlist</Text>
        </View>
      ) : (
        <View style={{ height: windowHeight }}>
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
                  id={element.item._id}
                  showMenu={true}
                />
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({});

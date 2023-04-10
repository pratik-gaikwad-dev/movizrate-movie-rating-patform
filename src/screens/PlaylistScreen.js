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
// import UserContext from '../context/contexts/UserContext';
import { ActivityIndicator, Text } from 'react-native-paper';
import InternetScreen from './InternetScreen';

const PlaylistScreen = () => {
  const { playlist, setPlaylistItems, refreshPlaylist, isLoading, internetWorking, setinternetWorking } = useContext(PlaylistContext);

  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    setPlaylistItems();
    setTimeout(() => {
      if (isLoading === true) {
        setinternetWorking(false);
      }
    }, 10000);
  }, [refreshPlaylist]);

  // const { loggedin } = useContext(UserContext);
  return (
    <SafeAreaView>
      {isLoading === true ? internetWorking === false ? <InternetScreen /> : <ActivityIndicator size="large" style={{ height: "100%" }} /> : playlist.length === 0 ? (
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
                  totalrating={element.item.totalratings}
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

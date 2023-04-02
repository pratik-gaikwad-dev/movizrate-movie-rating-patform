import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import WatchMovieContext from '../context/contexts/WatchMovieContext';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlaylistContext from '../context/contexts/PlaylistContext';
import MoviesContext from '../context/contexts/MoviesContext';

const AppBar = () => {
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const { watchMovie } = useContext(WatchMovieContext);

  const { addInPlaylist } = useContext(PlaylistContext);

  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <Appbar.Content title={watchMovie.name} subtitle={'Subtitle'} />
      <Appbar.Action
        icon={'magnify'}
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Icons name={MORE_ICON} size={25} onPress={openMenu} />}
      >
        <Menu.Item onPress={() => addInPlaylist(watchMovie._id, setVisible)} title="Add to Playlist" />
        <Menu.Item onPress={() => { }} title="Watch Now" />
      </Menu>
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({});

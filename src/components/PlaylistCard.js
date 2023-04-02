import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu } from 'react-native-paper';
import PlaylistContext from '../context/contexts/PlaylistContext';
import { useNavigation } from '@react-navigation/native';

const PlaylistCard = props => {
  const [visible, setVisible] = React.useState(false);

  const navigation = useNavigation();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const { deleteFromPlaylist } = useContext(PlaylistContext);
  return (
    <TouchableOpacity
      style={{
        width: windowWidth,
        flex: 0,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
      }}
      onPress={() => navigation.navigate('MovieScreen', { movieID: props.id })}>
      <View
        style={{
          width: windowWidth / 1.1,
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          paddingBottom: 10,
          paddingTop: 10,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.3,
          elevation: 4,
          shadowOffset: {
            height: 2,
            width: 2,
          },
        }}>
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <Image
            source={{
              uri: props.image,
            }}
            style={{ width: windowWidth / 4, height: windowHeight / 7 }}
          />
          <View
            style={{ flex: 0, justifyContent: 'space-between', paddingLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
              {props.name ? props.name.length < 15
                ? props.name
                : props.name.slice(0, 15) + '...' : null}
            </Text>
            <Text style={{ fontSize: 15, color: 'gray' }}>{props.genre}</Text>
            <Text style={{ fontSize: 15, color: 'black' }}>
              <MaterialCommunityIcons name="star" size={20} color="#a8870f" />{' '}
              {props.rating}
              {'   '}
              {/* {props.usrRatings === false ? null : (
                <MaterialCommunityIcons name="star" size={20} color="#24baef" />
              )}{' '}
              {props.usrRatings === false ? null : props.usrRatings} */}
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, color: 'blue' }}>
                Watch Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {!props.showMenu ? null : (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <MaterialCommunityIcons
                    name={MORE_ICON}
                    size={25}
                    color="gray"
                  />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => { }} title="Watch Now" />
              <Menu.Item
                onPress={() => {
                  deleteFromPlaylist(props.id, setVisible);
                }}
                title="Delete"
              />
            </Menu>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistCard;

const styles = StyleSheet.create({});

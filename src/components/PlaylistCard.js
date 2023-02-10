import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const PlaylistCard = props => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return (
    <View
      style={{
        width: windowWidth,
        flex: 0,
        alignItems: 'center',
        marginTop: 10,
      }}>
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
        <View style={{flex: 0, flexDirection: 'row'}}>
          <Image
            source={{
              uri: props.image,
            }}
            style={{width: windowWidth / 4, height: windowHeight / 7}}
          />
          <View
            style={{flex: 0, justifyContent: 'space-between', paddingLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {props.name.length < 15
                ? props.name
                : props.name.slice(0, 15) + '...'}
            </Text>
            <Text style={{fontSize: 15, color: 'gray'}}>{props.genre}</Text>
            <Text style={{fontSize: 15, color: 'black'}}>
              <MaterialCommunityIcons name="star" size={20} color="#a8870f" />{' '}
              {props.rating}{'   '}
              <MaterialCommunityIcons name="star" size={20} color="#24baef" />{' '}
              {props.usrRatings}
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 15, color: 'blue'}}>
                Watch on Netflix
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
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
            <Menu.Item onPress={() => {}} title="Rate This" />
            <Menu.Item onPress={() => {}} title="Delete" />
          </Menu>
        </View>
      </View>
    </View>
  );
};

export default PlaylistCard;

const styles = StyleSheet.create({});

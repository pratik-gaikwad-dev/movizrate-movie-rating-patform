import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';

const UserAccount = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          flex: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <TouchableOpacity style={styles.btnStyle}>
            <View style={{flex: 0, flexDirection: "row", alignItems: "center"}}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../assets/icons/Google.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>
                {'   '}
                Login with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyle}>
            <View style={{flex: 0, flexDirection: "row", alignItems: "center"}}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../assets/icons/Movizrate.png')}
              />
              <Text style={{fontSize: 20, color: 'black'}}>
                {'   '}
                Login with Movizrate
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: '#24baef'}]}>
            <View>
              <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
                {' '}
                Create a Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserAccount;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: 4,
    borderRadius: 10,
    height: 50,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    marginTop: 20,
  },
});

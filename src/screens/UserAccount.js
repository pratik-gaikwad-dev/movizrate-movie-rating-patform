import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  SafeAreaView,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';

const UserAccount = () => {
  const [loginVisible, setLoginVisible] = React.useState(false);
  const [signupVisible, setSignupVisible] = React.useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [signupEmail, onChangeSignupEmail] = React.useState('');
  const [signupPassword, onChangeSignupPassword] = React.useState('');
  const [signupPasswordConf, onChangeSignupPasswordConf] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const [age, setAge] = React.useState('Selete Date of Birth');
  const [name, setName] = React.useState('');

  const showLoginModal = () => setLoginVisible(true);
  const hideLoginModal = () => setLoginVisible(false);

  const showSignupModal = () => setSignupVisible(true);
  const hideSignupModal = () => setSignupVisible(false);

  const onClickLogin = () => {
    hideSignupModal();
    showLoginModal();
  };

  const onClickSignup = () => {
    hideLoginModal();
    showSignupModal();
  };

  const onCloseSignup = () => {
    setSignupVisible(false);
    setAge('Selete Date of Birth')
  }
  return (
    <SafeAreaView>
      <View style={{height: '100%', width: '100%'}}>
        <View style={{height: '100%', width: '100%', justifyContent: 'center'}}>
          <View>
            <Image
              source={require('../../assets/icons/Movizrate.png')}
              style={{height: 150, width: 150, alignSelf: 'center'}}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#24baef'}}>
              Login/Signup
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Text style={{color: 'gray', width: 200, textAlign: 'center'}}>
              Start to rate new movies and webseries on your thougt.
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#24baef',
                width: 200,
                padding: 10,
                backgroundColor: '#24baef',
                borderRadius: 5,
              }}
              onPress={showLoginModal}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: 'black',
                width: 200,
                padding: 10,
                borderRadius: 5,
              }}
              onPress={showSignupModal}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#24baef',
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                SIGNUP
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: '#db3236',
                width: 200,
                padding: 10,
                backgroundColor: '#db3236',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                LOGIN WITH GOOGLE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Signup Modal */}
      <Modal
        animationType="slide"
        visible={signupVisible}
        onDismiss={hideSignupModal}>
        <SafeAreaView>
          <Text
            style={{alignSelf: 'flex-end', paddingRight: 20, marginTop: 10}}>
            <TouchableOpacity onPress={onCloseSignup}>
              <Icons name="close" color={'gray'} size={25} />
            </TouchableOpacity>
          </Text>
        </SafeAreaView>
        <View style={{}}>
          <View>
            <View
              style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Image
                  style={{height: 100, width: 70}}
                  source={require('../../assets/icons/Movizrate.png')}
                />
              </View>
              <View style={{marginTop: 5}}>
                <Text
                  style={{color: '#24baef', fontSize: 20, fontWeight: '500'}}>
                  Signup Now.
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 300,
                    borderRadius: 5,
                  }}
                  onChangeText={onChangeSignupEmail}
                  value={signupEmail}
                  placeholder="Enter Email"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={{marginTop: 5}}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 300,
                    borderRadius: 5,
                  }}
                  onChangeText={setName}
                  value={name}
                  placeholder="Enter Name"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={{marginTop: 5}}>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setAge(date.toString().slice(0, 15));
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
                <TouchableOpacity
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 300,
                    borderRadius: 5,
                  }}
                  onPress={() => setOpen(true)}>
                  <Text style={{color: "gray"}}>{age}</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 5}}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 300,
                    borderRadius: 5,
                  }}
                  onChangeText={onChangeSignupPassword}
                  value={signupPassword}
                  placeholder="Enter Password"
                  placeholderTextColor={'gray'}
                  secureTextEntry={true}
                />
              </View>
              <View style={{marginTop: 5}}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 300,
                    borderRadius: 5,
                  }}
                  onChangeText={onChangeSignupPasswordConf}
                  value={signupPasswordConf}
                  placeholder="Confirm Password"
                  placeholderTextColor={'gray'}
                  secureTextEntry={true}
                />
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderColor: '#24baef',
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: '#24baef',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 15,
                    }}>
                    SIGNUP
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>Already have account? </Text>
                <TouchableOpacity onPress={onClickLogin}>
                  <Text style={{color: '#24baef', fontSize: 15}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Login Modal */}
      <Modal
        animationType="slide"
        visible={loginVisible}
        onDismiss={hideLoginModal}>
        <SafeAreaView>
          <Text
            style={{alignSelf: 'flex-end', paddingRight: 20, marginTop: 10}}>
            <TouchableOpacity onPress={() => setLoginVisible(false)}>
              <Icons name="close" color={'gray'} size={25} />
            </TouchableOpacity>
          </Text>
        </SafeAreaView>
        <View style={styles.centeredView}>
          <View>
            <View
              style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Image
                  style={{height: 100, width: 70}}
                  source={require('../../assets/icons/Movizrate.png')}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{color: '#24baef', fontSize: 20, fontWeight: '500'}}>
                  Welcome Back.
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 300,
                    borderRadius: 5,
                  }}
                  onChangeText={onChangeEmail}
                  value={email}
                  placeholder="Enter Email"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={{marginTop: 5}}>
                <TextInput
                  style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    width: 300,
                    borderRadius: 5,
                  }}
                  onChangeText={onChangePassword}
                  value={password}
                  placeholder="Enter Password"
                  placeholderTextColor={'gray'}
                  secureTextEntry={true}
                />
              </View>
              <View style={{width: 300, alignItems: 'flex-start'}}>
                <TouchableOpacity>
                  <Text style={{color: 'gray'}}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderColor: '#24baef',
                    padding: 10,
                    borderRadius: 5,
                    backgroundColor: '#24baef',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 15,
                    }}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'gray'}}>Don't have account? </Text>
                <TouchableOpacity onPress={onClickSignup}>
                  <Text style={{color: '#24baef', fontSize: 15}}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UserAccount;

const styles = StyleSheet.create({
  centeredView: {
    flex: 0,
    // borderWidth: 1,
    // borderColor: 'black',
    alignSelf: 'center',
    marginTop: '30%',
  },
});

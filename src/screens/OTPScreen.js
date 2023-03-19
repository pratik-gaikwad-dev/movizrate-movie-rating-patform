import {
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import OTPInput from '../components/OTPInput';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPScreen = () => {
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;
  const route = useRoute();
  console.log(code);
  let intOtp = Number(code);

  const bgColor = Platform.OS === 'ios' ? '#24baef' : '';
  const btnColor = Platform.OS === 'ios' ? 'white' : '#24baef';
  const navigation = useNavigation();
  const onSubmit = () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('authtoken', `${route.params.authtoken}`);
      console.log(route.params.otp);

      if (intOtp === route.params.otp) {
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
        };
        if (Platform.OS === 'android') {
          return fetch(
            'http://10.0.2.2:3000/api/v1/auth/verifyuser',
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              if (result.msg) {
                navigation.navigate('You')
                Alert.alert(result.msg);
              }
            })
            .catch(error => console.log('error', error));
        } else {
          return fetch(
            'http://localhost:3000/api/v1/auth/verifyuser',
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              if (result.msg) {
                navigation.navigate('You')
                Alert.alert(result.msg);
              }
            })
            .catch(error => console.log('error', error));
        }
      } else {
        Alert.alert('OTP Incorrect');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Text>Enter OTP</Text>
      <OTPInput
        setPinReady={setPinReady}
        code={code}
        setCode={setCode}
        maxLength={MAX_CODE_LENGTH}
      />
      <View style={{ backgroundColor: bgColor }}>
        <Button title="Submit" color={btnColor} onPress={onSubmit} />
      </View>
    </Pressable>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

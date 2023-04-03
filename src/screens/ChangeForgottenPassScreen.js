import { StyleSheet, TextInput, Button, View, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import config from '../config.json'

const ChangeForgottenPassScreen = () => {
  const route = useRoute();
  const email = route.params.email;
  const btnColor = Platform.OS === 'ios' ? 'white' : '#24baef';
  const bgColor = Platform.OS === 'ios' ? '#24baef' : '';

  const [newPass, setNewPass] = useState("");
  const [confNewPass, setConfNewPass] = useState("");

  const navigation = useNavigation();

  const onSubmit = () => {
    if (newPass.length < 8) {
      Alert.alert('Password must be at least 8 characters');
    }
    if (newPass !== confNewPass) {
      return Alert.alert("Password not matching");
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "newPassword": newPass
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    return fetch(`${config.server.host}/api/v1/auth/changeforgottenpassword`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.msg) {
          Alert.alert(result.msg);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'You' },
              ],
            })
          );
        }
      })
      .catch(error => console.log('error', error));
  }
  return (
    <View style={{ height: "100%", flex: 0, justifyContent: "center", alignItems: "center", width: "100%" }}>
      <View style={{ height: "25%", backgroundColor: "white", borderRadius: 10, width: "80%" }}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Enter new password"
            value={newPass}
            secureTextEntry={true}
            onChangeText={setNewPass}
            style={styles.inputStyle}
          />
          <TextInput
            placeholder="Confirm new password"
            value={confNewPass}
            secureTextEntry={true}
            onChangeText={setConfNewPass}
            style={styles.inputStyle}
          />
          <View style={
            {
              backgroundColor: bgColor,
              marginTop: 20,
              width: '80%',
              borderRadius: 5,
            }}>
            <Button
              title="Submit"
              color={btnColor}
              onPress={onSubmit}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ChangeForgottenPassScreen

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginTop: 20,
  },
})
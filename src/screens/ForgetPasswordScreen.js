import { SafeAreaView, StyleSheet, TextInput, View, Button, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import config from '../config.json'

const ForgetPasswordScreen = () => {

    const navigation = useNavigation();
    const btnColor = Platform.OS === 'ios' ? 'white' : '#24baef';
    const bgColor = Platform.OS === 'ios' ? '#24baef' : '';

    const [email, setEmail] = useState("");

    const onSubmit = async () => {
        if (email.length === 0) {
            Alert.alert("Enter Email");
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        try {
            const response_1 = await fetch(`${config.server.host}/api/v1/auth/forgetpassword`, requestOptions);
            const result_2 = await response_1.json();
            if (result_2.otp) {
                navigation.navigate("ForgetPassOTP", { otp: result_2.otp, email: email });
            } else {
                Alert.alert(result_2.msg);
            }
        } catch (error_1) {
            return console.log('error', error_1);
        }
    }
    return (
        <SafeAreaView>
            <View style={{ height: "100%", width: "100%", flex: 0, justifyContent: "center", alignItems: "center" }}>
                <View style={{ height: "20%", width: "80%", backgroundColor: "white", borderRadius: 10 }}>
                    <View style={{ alignItems: "center" }}>
                        <TextInput
                            placeholder="Enter Email"
                            value={email}
                            secureTextEntry={false}
                            onChangeText={setEmail}
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
        </SafeAreaView>
    )
}

export default ForgetPasswordScreen

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
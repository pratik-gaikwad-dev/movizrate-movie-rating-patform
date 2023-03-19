import { SafeAreaView, StyleSheet, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'

const ForgetPasswordScreen = () => {

    const btnColor = Platform.OS === 'ios' ? 'white' : '#24baef';
    const bgColor = Platform.OS === 'ios' ? '#24baef' : '';

    const [email, setEmail] = useState("");
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
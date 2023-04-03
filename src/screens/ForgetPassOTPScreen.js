import { Keyboard, Platform, Pressable, StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import OTPInput from '../components/OTPInput';

const ForgetPassOTPScreen = () => {
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
        if (intOtp === route.params.otp) {
            navigation.navigate("ChangeForgottenPass", { email: route.params.email })
        } else {
            Alert.alert('OTP is not correct');
        }
    }
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
    )
}

export default ForgetPassOTPScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
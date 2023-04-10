import { Platform, StyleSheet, TextInput, View, Button, KeyboardAvoidingView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/contexts/UserContext';
import InternetScreen from './InternetScreen';
import { ActivityIndicator } from 'react-native-paper';

const ChangePasswordScreen = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confNewPassword, setconfNewPassword] = useState('');

    const btnColor = Platform.OS === 'ios' ? 'white' : '#24baef';
    const bgColor = Platform.OS === 'ios' ? '#24baef' : '';

    const { onChangePassword, isLoading, internetWorking } = useContext(UserContext);
    

    return (
        <View style={{ height: '100%'}}>
            {isLoading === true ? internetWorking === false ? <InternetScreen /> : <ActivityIndicator size="large" style={{ height: "100%" }} /> :
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            height: '50%',
                            width: '80%',
                            backgroundColor: 'white',
                            borderRadius: 10,
                        }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                            }}>
                            <TextInput
                                placeholder="Enter old password"
                                value={oldPassword}
                                secureTextEntry={true}
                                onChangeText={setOldPassword}
                                style={styles.inputStyle}
                                placeholderTextColor={"black"}
                            />
                            <TextInput
                                placeholder="Enter new password"
                                value={newPassword}
                                secureTextEntry={true}
                                onChangeText={setNewPassword}
                                style={styles.inputStyle}
                                placeholderTextColor={"black"}
                            />
                            <TextInput
                                placeholder="Confirm new password"
                                value={confNewPassword}
                                secureTextEntry={true}
                                onChangeText={setconfNewPassword}
                                style={styles.inputStyle}
                                placeholderTextColor={"black"}
                            />
                            <View
                                style={[
                                    {
                                        backgroundColor: bgColor,
                                        marginTop: 20,
                                        width: '80%',
                                        borderRadius: 5,
                                    },
                                ]}>
                                <Button
                                    title="Submit"
                                    color={btnColor}
                                    onPress={() =>
                                        onChangePassword(oldPassword, newPassword, confNewPassword)
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>}
        </View>
    );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 5,
        marginTop: 20,
    },
});

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import UserContext from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Platform } from 'react-native';
import config from "../../config.json";

const UserState = props => {
    const [loggedin, setLoggedin] = useState(false);
    const [user, setUser] = useState({ name: '', email: '', bdate: '' });
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [internetWorking, setinternetWorking] = useState(true);
    const [changed, setChanged] = useState(false);

    if (changed) {
        setTimeout(() => {
            if (isLoading === true) {
                setinternetWorking(false);
            }
        }, 10000);
        setChanged(false);
    }

    const isLoggedin = async () => {
        const token = await AsyncStorage.getItem('@token');
        if (token) {
            setLoggedin(true);
        }
    };
    const onSignup = async (
        setSignupVisible,
        signupEmail,
        name,
        signupPassword,
        signupPasswordConf,
        age,
    ) => {
        try {
            setSignupVisible(false);
            setIsLoading(true);
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const raw = JSON.stringify({
                email: signupEmail,
                name: name,
                password: signupPassword,
                cpassword: signupPasswordConf,
                bdate: age,
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            };
            return fetch(`${config.server.host}/api/v1/auth/signup`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.authtoken) {
                        // console.log(result.authtoken);
                        setIsLoading(false);
                        navigation.navigate('OTPScreen', {
                            authtoken: result.authtoken,
                            otp: result.otp,
                        });
                    }
                    if (result.errors) {
                        setIsLoading(false)
                        Alert.alert(result.errors[0].msg);
                    }
                    if (result.error) {
                        setIsLoading(false)
                        Alert.alert(result.error);
                    }
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error);
        }
    };

    const onLogin = async (email, password, setLoginVisible) => {
        try {

            setLoginVisible(false);
            setIsLoading(true);

            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            const raw = JSON.stringify({
                email: email,
                password: password,
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            };
            return fetch(`${config.server.host}/api/v1/auth/login`, requestOptions)
                .then(response => response.json())
                .then(async result => {
                    if (result.authtoken) {
                        if (!result.user.verified) {
                            setIsLoading(false);
                            navigation.navigate('OTPScreen', {
                                authtoken: result.authtoken,
                                otp: result.otp,
                            });
                        } else {
                            // setLoginVisible(false);
                            setUser(result.user);
                            await AsyncStorage.setItem('@token', result.authtoken);
                            isLoggedin();
                            setIsLoading(false);
                            return navigation.navigate("Home");
                        }
                    }
                    if (result.errors) {
                        setIsLoading(false);
                        Alert.alert(result.errors[0].msg);
                    }
                    if (result.error) {
                        setIsLoading(false);
                        Alert.alert(result.error);
                    }
                })
                .catch(error => console.log('error', error));

        } catch (error) {
            console.log(error);
        }
    };

    const Logout = async () => {
        try {
            await AsyncStorage.removeItem('@token');
            setLoggedin(false);
            navigation.navigate("You");
            return true;
        } catch (exception) {
            return false;
        }
    };

    const getUser = async () => {
        try {
            setChanged(true)
            setIsLoading(true)
            const authtoken = await AsyncStorage.getItem('@token');
            const myHeaders = new Headers();
            myHeaders.append('authtoken', `${authtoken}`);

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow',
            };
            return fetch(
                `${config.server.host}/api/v1/auth/getuser`,
                requestOptions,
            )
                .then(response => response.json())
                .then(result => {
                    setUser(result.user);
                    setIsLoading(false);
                })
                .catch(error => console.log('error', error));

        } catch (error) {
            console.log(error);
        }
    };

    const onChangePassword = async (
        oldPassword,
        newPassword,
        confNewPassword,
    ) => {
        try {
            if (newPassword !== confNewPassword) {
                return Alert.alert("Password donen't match");
            }

            const token = await AsyncStorage.getItem('@token');
            setIsLoading(true);
            setChanged(true)
            const myHeaders = new Headers();
            myHeaders.append('authtoken', `${token}`);
            myHeaders.append('Content-Type', 'application/json');

            var raw = JSON.stringify({
                oldPassword: `${oldPassword}`,
                newPassword: `${newPassword}`,
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            };
            return fetch(
                `${config.server.host}/api/v1/auth/changepassword`,
                requestOptions,
            )
                .then(response => response.json())
                .then(result => {
                    if (result.msg === 'Password Changed') {
                        Alert.alert(result.msg);
                        setIsLoading(false);
                        Logout();
                    } else {
                        Alert.alert(result.msg);
                    }
                })
                .catch(error => console.log('error', error));

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <UserContext.Provider
            value={{
                onSignup,
                onLogin,
                loggedin,
                isLoggedin,
                Logout,
                user,
                getUser,
                onChangePassword,
                isLoading,
                internetWorking
            }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;

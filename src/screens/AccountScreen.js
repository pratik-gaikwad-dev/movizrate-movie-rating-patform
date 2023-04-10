import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { ActivityIndicator, Avatar } from 'react-native-paper';
import UserContext from '../context/contexts/UserContext';
import InternetScreen from './InternetScreen';

const AccountScreen = () => {
    const { user, isLoading, internetWorking } = useContext(UserContext);
    return (
        <View>
            {isLoading === true ? internetWorking === false ? <InternetScreen /> : <ActivityIndicator size="large" style={{ height: "100%" }} /> :
                <View
                    style={{
                        height: '100%',
                        flex: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}>
                    <View
                        style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ zIndex: 2 }}>
                            <Avatar.Image
                                size={70}
                                style={{ backgroundColor: '#24baef' }}
                                source={require('../../assets/images/User.png')}
                            />
                        </View>
                        <View
                            style={{
                                width: 100,
                                height: 10,
                                backgroundColor: '#efefef',
                                marginTop: -120,
                                zIndex: 1,
                                borderRadius: 1000,
                                paddingBottom: 130,
                                paddingTop: -100,
                            }}>
                            <Text></Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: 'white',
                                padding: 10,
                                width: '80%',
                                marginTop: -50,
                                borderRadius: 20,
                            }}>
                            <View
                                style={{
                                    marginTop: 60,
                                    paddingBottom: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={styles.textStyle}>{user.name}</Text>
                                <Text style={styles.textStyle}>{user.email}</Text>
                                <Text style={styles.textStyle}>{user.bdate}</Text>
                            </View>
                        </View>
                    </View>
                </View>}
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        marginTop: 30,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        width: '80%',
        textAlign: 'center',
        borderRadius: 5,
        color: 'black',
    },
});

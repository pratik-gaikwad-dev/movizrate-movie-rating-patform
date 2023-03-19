import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import UserContext from '../context/contexts/UserContext';
import UserAccount from '../screens/UserAccount';
import { useNavigation } from '@react-navigation/native';
import AccountScreen from '../screens/AccountScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import PlaylistScreen from '../screens/PlaylistScreen';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    const { loggedin, Logout, user } = React.useContext(UserContext);
    const navigation = useNavigation();
    const logoutHere = () => {
        const log = Logout();
        if (log) {
            navigation.navigate('Home');
        }
    }
    if (loggedin) {
        return (
            <Drawer.Navigator initialRouteName="Feed" drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label="Logout" onPress={logoutHere} />
                    </DrawerContentScrollView>
                )
            }}>
                <Drawer.Screen name={"Account"} options={{
                    headerTitle: `${loggedin ? user.name : "Account"}`
                }} component={AccountScreen} />
                <Drawer.Screen name={"Change Password"} component={ChangePasswordScreen} />
                <Drawer.Screen name={"Watch List"} component={PlaylistScreen} />
            </Drawer.Navigator>
        );
    }
    return (
        <UserAccount />
    )
};

export default DrawerNavigation;
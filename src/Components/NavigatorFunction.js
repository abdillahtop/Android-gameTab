import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ComponentDrawer from './ComponentDrawer'
import HomeScreen from '../Screens/home'
import Leaderboard from '../Screens/leaderboard'
import Login from '../Screens/login'
import Gameplay from '../Screens/gameplay'
import Register from '../Screens/register'

const leaderStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 20 }}>
                        <Ionicons name="ios-menu" size={30} />
                    </TouchableOpacity>
                ),
                headerRight: (
                    <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
                        <Image source={require('../Assets/crown.png')} style={{ width: 30, height: 30, marginRight: 20 }} />
                    </TouchableOpacity >
                )
            })
        },
        Gameplay: {
            screen: Gameplay,
            navigationOptions: {
                header: null,
            }
        },
        Leaderboard: {
            screen: Leaderboard,
            navigationOptions: {
                title: 'Leaderboard'
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
        },
        Register: {
            screen: Register
        }
    }
);

const DrawerNavigator = createDrawerNavigator(

    {
        Home: { screen: leaderStack },
        Gameplay: { screen: Gameplay },
        Login: { screen: Login }

    },
    {
        // hideStatusBar: true,
        contentComponent: ComponentDrawer,
        useNativeAnimations: true,
        drawerWidth: 250,
        overlayColor: 'rgba(0,0,0,.7)',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
        },
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

export default createAppContainer(DrawerNavigator);
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { createAppContainer, createDrawerNavigator, SafeAreaView, createStackNavigator } from 'react-navigation';
import ComponentDrawer from './ComponentDrawer'
import HomeScreen from '../Screens/home'
import Leaderboard from '../Screens/leaderboard'
import Login from '../Screens/login'
import Gameplay from '../Screens/gameplay'

const leaderStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerLeft: (
                    <TouchableOpacity>
                        <Image source={require('../Assets/user.png')} style={{ width: 30, height: 30, marginLeft: 20 }} />
                    </TouchableOpacity>
                ),
                headerRight: (
                    <TouchableOpacity>
                        <Image source={require('../Assets/crown.png')} style={{ width: 25, height: 25, marginRight: 20 }} />
                    </TouchableOpacity>
                )
            }
        },
        Gameplay: {
            screen: Gameplay,
            navigationOptions: {
                header: null,
            }
        },
        Leaderboard: {
            screen: Leaderboard
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            }
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
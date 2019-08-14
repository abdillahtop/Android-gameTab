import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { connect } from 'react-redux'
import { postByToken } from '../public/redux/action/user'

class SplashScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            token: ''
        }

    }

    componentDidMount = async () => {
        console.warn('token', this.state)
        await AsyncStorage.getItem('token', (error, result) => {
            if (result) {
                const token = {
                    token: result
                }
                this.props.dispatch(postByToken(token))
                if (this.props.users.isLogin) {
                    this.props.navigation.navigate('Home')
                }
                console.warn('didmount1', this.props.users.isLogin)
            }
        })

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', }}>Splash</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user
    }
}
export default connect(mapStateToProps)(SplashScreen)


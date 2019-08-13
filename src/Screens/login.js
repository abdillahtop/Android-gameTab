import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage } from "react-native";
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { postLogin } from '../public/redux/action/user'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            email: '',
            password: ''
        }
    }

    isLogin = async () => {
        if (this.state.email !== '' && this.state.password !== '') {

            let data = {
                email: this.state.email,
                password: this.state.password
            }
            await this.props.dispatch(postLogin(data))
            this.props.navigation.navigate('Home')

            // AsyncStorage.getItem('token', (error, result) => {
            //     if (result) {
            //         this.props.navigation.navigate('Home')
            //     } else {
            //         alert('Terjadi Kesalahan saat Login')
            //     }
            // })
        } else {
            alert('Warning, please insert Data in form')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <Container>
                    <Content>
                        <Form style={{ marginTop: 80 }}>
                            <Text style={styles.textLogin}>Login</Text>
                            <Item rounded style={{ marginBottom: 20 }}>
                                <Ionicons name="ios-person" style={styles.iconStyle} size={18} />
                                <Input
                                    style={styles.inputStyle}
                                    placeholder="Email"
                                    placeholderTextColor="#bbb"
                                    onChangeText={email => this.setState({ email })} />
                            </Item>
                            <Item rounded style={{ marginBottom: 20 }}>
                                <Ionicons name="ios-lock" style={styles.iconStyle} size={18} />
                                <Input
                                    style={styles.inputStyle}
                                    placeholder="Password"
                                    placeholderTextColor="#bbb"
                                    onChangeText={password => this.setState({ password })} />
                            </Item>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 130,
                                        height: 50,
                                        borderRadius: 10,
                                        flexDirection: "row",
                                        marginLeft: 40
                                    }}>
                                    <Text style={{ color: '#6c63ff' }}>Sign Up</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.isLogin()}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: 'rgba(0,0,0,0.2)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 130,
                                        height: 50,
                                        backgroundColor: '#6c63ff',
                                        borderRadius: 10,
                                        flexDirection: "row",
                                        marginLeft: 5
                                    }}>
                                    <Text style={{ color: 'white' }}>Login</Text>
                                    <Ionicons name="ios-arrow-round-forward" style={{ marginLeft: 10, color: 'white' }} size={24} />
                                </TouchableOpacity>
                            </View>
                        </Form>
                    </Content>
                    <Image source={require('../Assets/gam2.png')} style={styles.gambar2} />
                </Container>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}
export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
    textLogin: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: '600',
        color: '#444'
    },
    gambar2: {
        position: "absolute",
        marginTop: 360,
        marginLeft: -20,
        opacity: .8
    },
    score: {
        position: 'absolute',
        marginLeft: 130,
        marginTop: -20,
        flexDirection: 'row',
    },
    profile: {
        width: 200,
        alignItems: 'center'
    },
    profilImage: {
        width: 80,
        height: 80
    },
    iconStyle: {
        color: '#777',
        padding: 10,
        marginLeft: 10,
        borderRightWidth: 0.3,
        // borderColor: 'rgba(0, 0, 0, 0.3)'
    },
    inputStyle: {
        borderRadius: 300,
        height: 50,
        fontSize: 14,
        width: 200
    }
})

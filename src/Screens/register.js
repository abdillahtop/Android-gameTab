import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, Form, Item, Input } from 'native-base';
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { postRegister } from '../public/redux/action/user'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            name: '',
            email: '',
            password: ''
        }
    }

    isRegister = async () => {
        if (this.state.name !== '' && this.state.email !== '' && this.state.password !== '') {

            let data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            await this.props.dispatch(postRegister(data))
        } else {
            alert('Warning, please insert Data in form')
        }
    }

    render() {

        return (
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <Container>
                    <Content>
                        <Form style={{ marginTop: 20 }}>
                            <Text style={styles.textLogin}>Register</Text>
                            <Item rounded style={{ marginBottom: 20 }}>
                                <Ionicons name="ios-lock" style={styles.iconStyle} size={18} />
                                <Input
                                    style={styles.inputStyle}
                                    placeholder="Nama"
                                    placeholderTextColor="#bbb"
                                    onChangeText={name => this.setState({ name })} />
                            </Item>
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
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <TouchableOpacity
                                    onPress={() => this.isRegister()}
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
                                        marginLeft: 180
                                    }}>
                                    <Text style={{ color: 'white' }}>Register</Text>
                                    <Ionicons name="ios-arrow-round-forward" style={{ marginLeft: 10, color: 'white' }} size={24} />
                                </TouchableOpacity>
                            </View>
                        </Form>
                    </Content>
                    {/* <Image source={require('../Assets/gam1.png')} style={styles.gambar2} /> */}
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
export default connect(mapStateToProps)(Register)

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
        marginTop: 370,
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

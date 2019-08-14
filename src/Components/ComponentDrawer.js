import React, { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { ListItem, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import { postLogout } from '../public/redux/action/user'
import Ionicons from 'react-native-vector-icons/Ionicons';

class ComponentDrawer extends Component {
    constructor() {
        super()
        this.state = {
            token: '',
            name: '',
            userid: '',
            role: ''

        }
        AsyncStorage.getItem('Name', (error, result) => {
            if (result) {
                this.setState({
                    name: result
                })
            }
        })
        AsyncStorage.getItem('Token', (error, result) => {
            if (result) {
                this.setState({
                    token: result
                })
            }
        })
        AsyncStorage.getItem('Userid', (error, result) => {
            if (result) {
                this.setState({
                    userid: result
                })
            }
        })
        AsyncStorage.getItem('Role', (error, result) => {
            if (result) {
                this.setState({
                    role: result
                })
            }
        })
    }

    isLogout() {
        this.props.dispatch(postLogout(this.state.userid))
        AsyncStorage.getItem('Token', (error, result) => {
            if (result) {
                alert('Berhasil Logout')
                this.props.navigation.navigate('Home')
            } else {
                alert('Terjadi Kesalahan saat Logout')
            }
        })
    }

    render() {
        // console.warn("name", this.state.name)
        // console.warn("token", this.state.token)
        // console.warn("userid", this.state.userid)
        // console.warn("Role", this.state.role)
        return (
            <SafeAreaView style={{
                flex: 1, backgroundColor: '#fff', elevation: 20
            }
            }>
                <View style={styles.profilTemplate}>
                    {
                        this.state.role === 'user'
                            ?
                            <TouchableOpacity>
                                <Image source={require('../Assets/man.png')} style={styles.profilImage} />
                                <Text style={styles.profilName}>{this.state.name}</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity>
                                <Image source={require('../Assets/user.png')} style={styles.profilImage} />
                                <Text style={styles.profilName}>User</Text>
                            </TouchableOpacity>
                    }
                </View >
                <View style={{ flex: 1 }}>
                    <ScrollView >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Leaderboard')}>
                            <ListItem >
                                <Image source={require('../Assets/crown.png')} style={{ width: 20, height: 20 }} />
                                <Text style={styles.textIcon}>Leaderboards</Text>
                            </ListItem>
                        </TouchableOpacity>
                        {this.state.role === 'user'
                            ?
                            <TouchableOpacity onPress={() => this.isLogout()}>
                                <ListItem >
                                    <Ionicons name="ios-log-in" style={styles.iconStyle} size={20} />
                                    <Text style={styles.textIcon}>Logout</Text>
                                </ListItem>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <ListItem >
                                    <Ionicons name="ios-log-in" style={styles.iconStyle} size={20} />
                                    <Text style={styles.textIcon}>Login</Text>
                                </ListItem>
                            </TouchableOpacity>
                        }
                    </ScrollView>
                </View>
                <Image source={require('../Assets/gam1.png')} style={styles.gambar1} />
            </SafeAreaView >
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user
    }
}
export default connect(mapStateToProps)(withNavigation(ComponentDrawer))

const styles = StyleSheet.create({
    textIcon: {
        flex: 7,
        fontWeight: '500',
        color: '#666',
        marginLeft: 32,
        fontSize: 16,
    },
    profilTemplate: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 30
    },
    profilImage: {
        height: 100,
        width: 101,
        borderRadius: 54,
        alignSelf: 'center',
    },
    iconStyle: {
        color: '#FBCC38',
        fontWeight: '900'
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '70%',
        position: 'relative',
    },
    profilName: {
        fontWeight: 'bold',
        color: '#666',
        alignSelf: 'center',
        paddingTop: '5%',
        fontSize: 25
    },
    gambar1: {
        opacity: .8,
        marginTop: 20,
        width: 270,
        marginLeft: -20
    }
})
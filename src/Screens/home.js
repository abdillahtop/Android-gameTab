import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, AsyncStorage } from "react-native";

export default class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            role: '',
        }

        AsyncStorage.getItem('Role', (error, result) => {
            if (result) {
                this.setState({
                    role: result
                })
            }
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../Assets/gam1.png')} style={styles.gambar1} />
                <Image source={require('../Assets/gam2.png')} style={styles.gambar2} />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                    <TouchableOpacity style={styles.butStart} onPress={() => this.props.navigation.navigate('Gameplay')}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', }}>Start</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gambar1: {
        // position: "absolute",
        // marginTop: -200,
        position: "absolute",
        marginLeft: 130,
        marginTop: -20,
        opacity: .5
    },
    gambar2: {
        position: "absolute",
        marginTop: 300,
        opacity: .5
    },
    butStart: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        backgroundColor: '#6c63ff',
        borderRadius: 50,
    }
})
import React from "react";
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from "react-native";
var Sound = require('react-native-sound');

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../Assets/gam1.png')} style={styles.gambar1} />
                <Image source={require('../Assets/gam2.png')} style={styles.gambar2} />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                    <Text style={{ color: '#666', fontSize: 30, fontWeight: '600', marginBottom: 20 }}>High Score</Text>
                    <Text style={{ color: '#6c63ff', fontSize: 24, fontWeight: '600', marginBottom: 20 }}>0</Text>
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
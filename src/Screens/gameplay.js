import React from "react";
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from "react-native";
var Sound = require('react-native-sound');

export default class HomeScreen extends React.Component {
    render() {
        const sound = new Sound(require('../Assets/Ride1.wav'), null, (error) => {
            if (error) {
                console.warn(error)
            }
            sound.setVolume(1.0)
        })

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => sound.play()}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 150,
                        height: 150,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                    }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        backgroundColor: '#999',
                        borderRadius: 50,
                    }}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => sound.play()}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                    }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        backgroundColor: '#999',
                        borderRadius: 50,
                    }}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => sound.play()}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 150,
                        height: 150,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                    }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        backgroundColor: '#999',
                        borderRadius: 50,
                    }}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => sound.play()}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                    }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        backgroundColor: '#999',
                        borderRadius: 50,
                    }}>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

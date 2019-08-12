import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Login extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.score}>
                    <View>
                        <Text>Rank</Text>
                        <Text>100</Text>
                    </View>
                    <View style={styles.profile}>
                        <Image source={require('../Assets/user.png')} style={styles.profilImage} />
                        <Text style={styles.profilName}> User</Text>
                    </View>
                    <View>
                        <Text>Points</Text>
                        <Text>1999</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
})

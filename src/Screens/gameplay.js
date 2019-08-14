import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
var Sound = require('react-native-sound');

export default class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            hasil: 0,
            button: 0,
            isNow: 0,
            pattern: [1, 2, 3, 4, 4, 4],
            combo: 0,
            score: 0
        }
    }
    snear1 = async () => {
        await this.setState({
            button: 1,
        })

        const sound = new Sound(require('../Assets/Snare(1).wav'), (error) => {
            if (error) {
                console.warn(error)
            }
            sound.play(() => {
                sound.release()
                sound.setVolume(1.0)
            })
        })

        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                this.state.combo > 5
                    ?
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 5,
                        isNow: 0
                    })
                    :
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 2,
                        isNow: 0
                    })

            }
            else {
                await this.setState({
                    score: this.state.score + 1,
                    isNow: this.state.isNow + 1
                })
            }
        } else {
            await this.setState({
                isNow: 0,
                combo: 0,
                score: 0
            })
        }
    }

    snear2 = async () => {
        await this.setState({
            button: 2,
        })

        const sound = new Sound(require('../Assets/Snare(2).wav'), (error) => {
            if (error) {
                console.warn(error)
            }
            sound.play(() => {
                sound.release()
                sound.setVolume(1.0)
            })
        })

        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                this.state.combo > 5
                    ?
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 5,
                        isNow: 0
                    })
                    :
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 2,
                        isNow: 0
                    })

            }
            else {
                await this.setState({
                    score: this.state.score + 1,
                    isNow: this.state.isNow + 1
                })
            }
        } else {
            await this.setState({
                isNow: 0,
                combo: 0,
                score: 0
            })
        }
    }

    kick1 = async () => {
        await this.setState({
            button: 3,
        })
        const sound = new Sound(require('../Assets/Kick(1).wav'), (error) => {
            if (error) {
                console.warn(error)
            }
            sound.play(() => {
                sound.release()
                sound.setVolume(1.0)
            })
        })
        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                this.state.combo > 5
                    ?
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 5,
                        isNow: 0
                    })
                    :
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 2,
                        isNow: 0
                    })

            }
            else {
                await this.setState({
                    score: this.state.score + 1,
                    isNow: this.state.isNow + 1
                })
            }
        } else {
            await this.setState({
                isNow: 0,
                combo: 0,
                score: 0
            })
        }
    }

    kick2 = async () => {
        await this.setState({
            button: 4,
        })

        const sound = new Sound(require('../Assets/Kick(2).wav'), (error) => {
            if (error) {
                console.warn(error)
            }
            sound.play(() => {
                sound.release()
                sound.setVolume(1.0)
            })
        })
        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                this.state.combo > 5
                    ?
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 5,
                        isNow: 0
                    })
                    :
                    await this.setState({
                        combo: this.state.combo + 1,
                        score: this.state.score + 2,
                        isNow: 0
                    })

            }
            else {
                await this.setState({
                    score: this.state.score + 1,
                    isNow: this.state.isNow + 1
                })
            }
        } else {
            await this.setState({
                isNow: 0,
                combo: 0,
                score: 0
            })
        }
    }

    render() {
        return (
            <>
                {/* {
                    console.warn("isNOw :", this.state.isNow),
                console.warn("Button :", this.state.button)
            } */}
                <Image source={require('../Assets/gam1.png')} style={styles.gambar1} />
                <Image source={require('../Assets/gam2.png')} style={styles.gambar2} />
                <Text style={styles.textScore}>SCORE</Text>
                <Text style={styles.score}>{this.state.score}</Text>
                <Text style={styles.score}>{this.state.combo}</Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            this.state.button === 1
                                ?
                                <TouchableOpacity
                                    onPress={() => this.snear1()}
                                    backgroundColor='red'
                                    style={styles.snear1Overlay}>
                                    <View style={styles.snear1} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => this.snear1()}
                                    style={styles.snear1Overlay}>
                                    <View style={styles.snear1} />
                                </TouchableOpacity>
                        }
                        {
                            this.state.button === 2
                                ?
                                <TouchableOpacity
                                    onPress={() => this.snear2()}
                                    style={styles.snear2Overlay}
                                    backgroundColor='red'>
                                    <View style={styles.snear2} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => this.snear2()}
                                    style={styles.snear2Overlay}>
                                    <View style={styles.snear2} />
                                </TouchableOpacity>
                        }
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        {
                            this.state.button === 3
                                ?
                                <TouchableOpacity
                                    onPress={() => this.kick1()}
                                    style={styles.kick1Overlay}>
                                    <View style={styles.kick1} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => this.kick1()}
                                    style={styles.kick1Overlay}>
                                    <View style={styles.kick1} />
                                </TouchableOpacity>
                        }
                        {
                            this.state.button === 4
                                ?
                                <TouchableOpacity
                                    onPress={() => this.kick2()}
                                    style={styles.kick2Overlay}>
                                    <View style={styles.kick2} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => this.kick2()}
                                    backgroundColor='red'
                                    style={styles.kick2Overlay}>
                                    <View style={styles.kick2} />
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    textScore: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50

    },
    score: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    gambar1: {
        // position: "absolute",
        // marginTop: -200,
        position: "absolute",
        marginLeft: 130,
        marginTop: -20,
        opacity: .3
    },
    gambar2: {
        position: "absolute",
        marginTop: 400,
        opacity: .3
    },
    snear1: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#999',
        borderRadius: 50,
    },
    snear1Overlay: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 110,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginRight: 20,
        marginBottom: 20
    },
    snear2: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#999',
        borderRadius: 50,
    },
    snear2Overlay: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 110,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginBottom: 20
    },
    kick1: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#999',
        borderRadius: 50,
    },
    kick1Overlay: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginRight: 50,
    },
    kick2: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#999',
        borderRadius: 50,
    },
    kick2Overlay: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 100,
    }
})
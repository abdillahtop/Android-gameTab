import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, AsyncStorage, Alert } from "react-native";
import { postScore } from '../public/redux/action/score'
import { getPattern } from '../public/redux/action/pattern'
import { connect } from 'react-redux'
let Sound = require('react-native-sound');

class Gameplay extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            userid: '',
            role: '',
            hasil: 0,
            button: 0,
            isNow: 0,
            pattern: null,
            combo: 0,
            score: 0
        }
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

    componentWillMount() {
        this.startPettern()
    }

    startPettern = async () => {
        await this.props.dispatch(getPattern())
        // console.warn("ini", this.props.pattern)
        this.props.pattern.map((item) => {
            let parse = item.pattern.toString()
            let hasilSplit = parse.split("")
            this.setState({
                pattern: hasilSplit
            })
            console.warn(hasilSplit)
        })
    }

    // componentWillMount() {
    //    <View>

    //        <ActivityIndicator  />
    //    </View>
    // }

    addScore = () => {
        console.warn("da id nih", this.state.userid)
        console.warn("score", this.state.score)
        let data = {
            userid: this.state.userid,
            score: this.state.score
        }
        this.props.dispatch(postScore(data))
            .then(() => {
                this.setState({
                    score: 0,
                    isNow: 0,
                    combo: 0
                })
            })
        console.warn("role", this.state.role)
        if (this.state.role === "user") {
            this.props.navigation.navigate('Leaderboard')
        } else {
            Alert.alert(
                'Anda Belum Login!!',
                `Login Segera cuy.. Untuk bergabung sebagai juara!!`, // <- this part is optional, you can pass an empty string
                [
                    {
                        text: 'Login',
                        onPress: () => this.props.navigation.navigate('Login')
                    },

                ],
            );
        }

    }

    snear1 = async () => {
        if (this.state.pattern === null) {
            alert("Mohon Tunggu Sebentar, Patch sedang didownload")
        } else {
            await this.setState({
                button: "1",
            })
            // console.warn("ini pattern", parseInt(this.state.pattern))
            const sound = new Sound(require('../Assets/Snare(1).wav'), (error) => {
                if (error) {
                    console.warn(error)
                }
                sound.play(() => {
                    sound.release()
                    sound.setVolume(1.0)
                })
                this.setState({
                    button: this.state.pattern[this.state.isNow]
                })
            })
            if (this.state.pattern[this.state.isNow] === this.state.button) {
                if (this.state.pattern.length === this.state.isNow + 1) {
                    this.state.combo > 5
                        ?
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 10,
                            isNow: 0
                        })
                        :
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 5,
                            isNow: 0
                        })

                }
                else {
                    await this.setState({
                        score: this.state.score + 5,
                        isNow: this.state.isNow + 1
                    })
                }
            } else {
                Alert.alert(
                    'Lose !!!',
                    `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                    [
                        {
                            text: 'Save Score',
                            onPress: () => this.addScore()
                        },

                    ],
                );
            }
        }

    }

    snear2 = async () => {
        if (this.state.pattern === null) {
            alert("Mohon Tunggu Sebentar, Patch sedang didownload")
        } else {
            await this.setState({
                button: "2",
            })

            const sound = new Sound(require('../Assets/Snare(2).wav'), (error) => {
                if (error) {
                    console.warn(error)
                }
                sound.play(() => {
                    sound.release()
                    sound.setVolume(1.0)
                })
                this.setState({
                    button: this.state.pattern[this.state.isNow]
                })
            })
            if (this.state.pattern[this.state.isNow] === this.state.button) {
                if (this.state.pattern.length === this.state.isNow + 1) {
                    this.state.combo > 5
                        ?
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 10,
                            isNow: 0
                        })
                        :
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 5,
                            isNow: 0
                        })

                }
                else {
                    await this.setState({
                        score: this.state.score + 5,
                        isNow: this.state.isNow + 1
                    })
                }
            } else {
                Alert.alert(
                    'Lose !!!',
                    `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                    [
                        {
                            text: 'Save Score',
                            onPress: () => this.addScore()
                        },

                    ],
                );
            }
        }
    }

    kick1 = async () => {
        if (this.state.pattern === null) {
            alert("Mohon Tunggu Sebentar, Patch sedang didownload")
        } else {
            await this.setState({
                button: "3",
            })
            const sound = new Sound(require('../Assets/Kick(1).wav'), (error) => {
                if (error) {
                    console.warn(error)
                }
                sound.play(() => {
                    sound.release()
                    sound.setVolume(1.0)
                })
                this.setState({
                    button: this.state.pattern[this.state.isNow]
                })
            })
            if (this.state.pattern[this.state.isNow] === this.state.button) {
                if (this.state.pattern.length === this.state.isNow + 1) {
                    this.state.combo > 5
                        ?
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 10,
                            isNow: 0
                        })
                        :
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 5,
                            isNow: 0
                        })

                }
                else {
                    await this.setState({
                        score: this.state.score + 5,
                        isNow: this.state.isNow + 1
                    })
                }
            } else {
                Alert.alert(
                    'Lose !!!',
                    `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                    [
                        {
                            text: 'Save Score',
                            onPress: () => this.addScore()
                        },

                    ],
                );
            }
        }
    }

    kick2 = async () => {
        if (this.state.pattern === null) {
            alert("Mohon Tunggu Sebentar, Patch sedang didownload")
        } else {
            await this.setState({
                button: "4",
            })

            const sound = new Sound(require('../Assets/Kick(2).wav'), (error) => {
                if (error) {
                    console.warn(error)
                }
                sound.play(() => {
                    sound.release()
                    sound.setVolume(1.0)
                })
                this.setState({
                    button: this.state.pattern[this.state.isNow]
                })
            })
            if (this.state.pattern[this.state.isNow] === this.state.button) {
                if (this.state.pattern.length === this.state.isNow + 1) {
                    this.state.combo > 5
                        ?
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 10,
                            isNow: 0
                        })
                        :
                        await this.setState({
                            combo: this.state.combo + 1,
                            score: this.state.score + 5,
                            isNow: 0
                        })

                }
                else {
                    await this.setState({
                        score: this.state.score + 5,
                        isNow: this.state.isNow + 1
                    })
                }
            } else {
                Alert.alert(
                    'Lose !!!',
                    `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                    [
                        {
                            text: 'Save Score',
                            onPress: () => this.addScore()
                        },

                    ],
                );
            }
        }
    }

    render() {
        // console.warn(parseInt("ini pattern", this.state.pattern))
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
                <Text style={styles.score}>Combo :{this.state.combo}</Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 120 }}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            this.state.button === "1"
                                ?
                                <TouchableOpacity
                                    onPress={() => this.snear1()}
                                    style={styles.snear1Overlay}>
                                    <View style={styles.snear21} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => this.snear1()}
                                    style={styles.snear1Overlay}>
                                    <View style={styles.snear1} />
                                </TouchableOpacity>
                        }
                        {
                            this.state.button === "2"
                                ?
                                <TouchableOpacity
                                    onPress={() => this.snear2()}
                                    style={styles.snear2Overlay}>
                                    <View style={styles.snear21} />
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
                            this.state.button === "3"
                                ?
                                <TouchableOpacity
                                    onPress={() => this.kick1()}
                                    style={styles.kick1Overlay}>
                                    <View style={styles.kick21} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={() => this.kick1()}
                                    style={styles.kick1Overlay}>
                                    <View style={styles.kick1} />
                                </TouchableOpacity>
                        }

                        <TouchableOpacity
                            onPress={() => this.kick2()}
                            style={styles.kick2Overlay}>
                            {
                                this.state.button === "4"
                                    ?
                                    <View style={styles.kick21} />
                                    :
                                    <View style={styles.kick2} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userList,
        pattern: state.pattern.patternList
    };
};
export default connect(mapStateToProps)(Gameplay)

const styles = StyleSheet.create({
    textScore: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,
        color: '#444'

    },
    score: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#666'

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
    OverlayOn: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 110,
        backgroundColor: '#444',
        borderRadius: 100,
        marginRight: 20,
        marginBottom: 20
    },
    snearActive: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#999',
        borderRadius: 50,
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
    snear21: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: 'red',
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
    kick21: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#111',
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
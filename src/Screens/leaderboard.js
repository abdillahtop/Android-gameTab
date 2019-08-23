import React from "react";
import { View, Text, StyleSheet, Image, AsyncStorage } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, CardItem } from 'native-base';
import { connect } from 'react-redux'
import { getScore, getScoreById } from '../public/redux/action/score'
import Leaderboard from 'react-native-leaderboard';

class LeaderBoard extends React.Component {
    constructor() {
        super()
        this.state = {
            scores: [],
            name: '',
            role: '',
            userid: '',
            score: ''
        }
        AsyncStorage.getItem('Name', (error, result) => {
            if (result) {
                this.setState({
                    name: result
                })
            }
        })
        AsyncStorage.getItem('Score', (error, result) => {
            if (result) {
                this.setState({
                    score: result
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
        AsyncStorage.getItem('Userid', (error, result) => {
            if (result) {
                this.setState({
                    userid: result
                })
            }
        })
    }

    componentWillMount() {
        console.warn("score", this.props.scorebyid)
        alert("Pastikan Internet anda aktif")
    }
    componentDidMount = async () => {
        await this.props.dispatch(getScore())
        await this.props.dispatch(getScoreById(this.state.userid))
        this.setState({
            scores: this.state.score,
            scoresbyid: this.state.score
        })
    }
    renderRow = ({ item }) => {
        return (
            <Card style={styles.cardList}>
                <CardItem cardBody>
                    <Text style={styles.cardListNumb}>1</Text>
                    <Image source={require('../Assets/user.png')} style={{ width: 30, height: 30 }} />
                    <Text style={styles.cardListName}>{item.name}</Text>
                    <Text style={styles.cardListPoint}>{item.score}K</Text>
                </CardItem>
            </Card>

        )
    }

    render() {
        const data = this.props.scorebyid
        console.warn("data", data)
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={styles.score}>
                    <View style={styles.colRank}>
                        <Text style={styles.textRank}>Rank</Text>
                        {this.state.role === "user"
                            ?
                            <Text style={styles.Rank}>{data.rank}</Text>
                            :
                            <Text style={styles.Rank}>0</Text>
                        }
                    </View>
                    <View style={styles.colProfile}>
                        <Image source={require('../Assets/user.png')} style={styles.profilImage} />
                        {this.state.role === 'user'
                            ?
                            <Text style={styles.textProfile}>{this.state.name}</Text>
                            :
                            <Text style={styles.textProfile}>user</Text>
                        }
                    </View>
                    <View style={styles.colPoints}>
                        <Text style={styles.textPoint}>Points</Text>
                        {
                            this.state.role === 'user'
                                ?
                                data.result.map((item) => {
                                    return (
                                        <Text style={styles.Point}>{item.score}</Text>
                                    )
                                })
                                :
                                <Text style={styles.Point}>0</Text>
                        }
                    </View>
                </View>
                {/* <FlatList
                    style={styles.flatlist}
                    data={this.props.score}
                    renderItem={this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                /> */}
                <View style={{ marginTop: 30, borderColor: 'red', color: '#666', marginHorizontal: 20 }} >
                    <Leaderboard
                        data={this.props.score}
                        sortBy='score'
                        labelBy='name'
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.score.scoreList,
        scorebyid: state.score.scoreidList
    };
};
export default connect(mapStateToProps)(LeaderBoard);

const styles = StyleSheet.create({
    score: {
        marginTop: 30,
        backgroundColor: '#FBCC38',
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 5
    },
    colRank: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'center'
    },
    colProfile: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    colPoints: {
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 40
    },
    textRank: {
        fontSize: 24,
        fontWeight: '400',
        color: '#fff',
        alignItems: 'center',
        marginTop: 15
    },
    textPoint: {
        fontSize: 24,
        fontWeight: '400',
        color: '#fff',
        marginTop: 15
    },
    textProfile: {
        fontSize: 22,
        color: '#fff',
        marginTop: 10
    },
    Rank: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff'
    },
    Point: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff'
    },
    flatlist: {
        marginTop: 30
    },
    cardList: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    cardListNumb: {
        fontSize: 24,
        fontWeight: '400',
        color: '#444',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20
    },
    cardListName: {
        fontSize: 24,
        fontWeight: '400',
        color: '#444',
        width: 100,
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20
    },
    cardListPoint: {
        fontSize: 24,
        fontWeight: '400',
        color: '#444',
        marginLeft: 20,
        marginRight: 20
    },
    profilImage: {
        width: 60,
        height: 60
    },

})

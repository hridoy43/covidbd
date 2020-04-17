import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Title } from 'react-native-paper'
import axios from 'axios'

export default function WorldStatistics() {
    const [data, setData] = useState({})

    const color = ["#FFCA28", "#EF5350", "#66BB6A"]

    const fetchCovidData = () => {
        axios.get('https://corona.lmao.ninja/v2/all')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.warn(err.message)
            })
    }

    useEffect(() => {
        fetchCovidData()
    }, [])


    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <View style={{ ...styles.titleView, ...styles.singleTitle }}>
                    <Title>বিশ্ব পরিসংখ্যান</Title>
                </View>
                <View style={styles.statsView}>
                    <Card style={styles.statsCard}>
                        <View style={styles.singleStats}>
                            <Title style={{ color: color[0], ...styles.singleTitle }}>আক্রান্ত</Title>
                            <Text style={styles.text}>{data.cases ? data.cases : '-'} জন</Text>
                        </View>
                    </Card>
                    <Card style={styles.statsCard}>
                        <View style={styles.singleStats}>
                            <Title style={{ color: color[1], ...styles.singleTitle }}>মারা গিয়েছে</Title>
                            <Text style={styles.text}>{data.deaths ? data.deaths : '-'} জন</Text>
                        </View>
                    </Card>
                </View>

                <View style={styles.singleStats}>
                    <Card style={styles.statsCard}>
                        <View style={styles.singleStats}>
                            <Title style={{ color: color[2], ...styles.singleTitle }}>সুস্থ্য হয়েছেন</Title>
                            <Text style={styles.text}>{data.recovered ? data.recovered : '-'} জন</Text>
                        </View>
                    </Card>
                </View>
            </Card>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    card: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    statsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    singleStats: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    singleTitle: {
        fontWeight: "700",
        opacity: .92
    },
    text: {
        fontSize: 18,
        opacity: 0.7
    },
    statsCard: {
        width: 180,
        paddingHorizontal: 5,
        paddingVertical: 8
    }
})

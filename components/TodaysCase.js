import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Title, Subheading } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';

const TodaysCase = ({ countryData }) => {
    const { todayCases, todayDeaths, active } = countryData
    const data = [active, todayCases, todayDeaths]
    const statsString = ["সক্রিয়", "নতুন আক্রান্ত", "মারা গিয়েছে"]

    const date = new Date();

    const onLoadStats = (data) => {
        const color = ["#D4E157", "#FFCA28", "#EF5350"]
        return data.map((item, index) => {
            return (
                <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name="square" style={styles.iconStyle} size={16} color={color[index]} />
                        <Text>{statsString[index]}</Text>
                    </View>
                    <Text>
                        {item || 0} জন
                    </Text>
                </View>
            )
        })

    }


    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <View style={styles.titleView}>
                    <Title>সর্বশেষ তথ্য</Title>
                    <Subheading style={styles.subTitle}>{date.toDateString().toLocaleString('bn', 'BD')}</Subheading>
                </View>
                <View style={styles.statsView}>
                    {onLoadStats(data)}
                </View>
            </Card>
        </View>
    )
}


export default TodaysCase

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    card: {
        paddingVertical: 10
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitle: {
        fontSize: 12,
        marginTop: -3
    },
    statsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    iconStyle: {
        marginRight: 8,
        marginVertical: 8
    }
})

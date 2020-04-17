import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card, Title } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';

const CountryItemStats = ({ data: countryData }) => {

    const { cases, deaths, country, todayCases, recovered, todayDeaths, active, countryInfo } = countryData
    const statsData = [cases, recovered, deaths]
    const statsData1 = [active, todayCases, todayDeaths]

    const statsString = ["মোট আক্রান্ত", "সুস্থ্য হয়েছে", "মারা গিয়েছে"]
    const statsString1 = ["সক্রিয়", "নতুন আক্রান্ত", "মারা গিয়েছে"]

    const color = ["#FFCA28", "#66BB6A", "#EF5350"]
    const color1 = ["#D4E157", "#FFCA28", "#EF5350"]

    const onLoadStats = (data, statsStringArray, itemColor) => {

        return (
            <View style={styles.statsView}>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesome name="square" style={styles.iconStyle} size={16} color={itemColor[index]} />
                                    <Text>{statsStringArray[index]}</Text>
                                </View>
                                <Text>
                                    {item || 0} জন
                                    </Text>
                            </View>
                        )
                    })
                }
            </View>
        )

    }


    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card>
                    <View style={styles.itemHeading}>
                        {countryInfo && countryInfo.flag &&
                            < Image
                                style={{ height: 18, width: 28, margin: 8 }}
                                source={{ uri: `${countryInfo.flag}` }}
                            />
                        }
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{country || ''}</Text>
                    </View>
                </Card>

                <View>
                    {onLoadStats(statsData, statsString, color)}

                    <View style={styles.titleView}>
                        <Title style={{ fontSize: 20 }}>আজকের তথ্য</Title>
                    </View>

                    {onLoadStats(statsData1, statsString1, color1)}
                </View>
            </Card>

        </View >
    )
}


export default CountryItemStats

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
        marginVertical: 10,
    },
    iconStyle: {
        marginRight: 8,
        marginVertical: 8
    },
    itemHeading: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
})

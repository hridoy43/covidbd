import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native'
import { Card } from 'react-native-paper'
import { PieChart } from 'react-native-svg-charts'
import { Text as SvgText } from "react-native-svg";
import { FontAwesome } from '@expo/vector-icons';
import NumberFormatGenerator from '../components/NumberFormatGenerator'



export default function RenderPieChart({ countryData }) {
    const { cases: confirmed, recovered, deaths, country, countryInfo } = countryData
    const data = [confirmed, recovered, deaths]
    const statsString = ["আক্রান্ত", "সুস্থ্য হয়েছেন", "মারা গিয়েছে"]
    const color = ["#FFCA28", "#66BB6A", "#EF5350"]

    const fadeAnim = new Animated.Value(0)

    const position = new Animated.ValueXY({ x: 0, y: 0 })

    const rotate = position.y.interpolate({
        inputRange: [0, 200],
        outputRange: ['0deg', '200deg']
    })

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1700
        }).start()

        Animated.timing(position, {
            toValue: { x: 0, y: 360 },
            duration: 1000
        }).start()
    }, [])

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: color[index],
            },
            key: `pie-${index}`,
        }))

    const Labels = ({ slices, height, width }) => {
        const totalVictim = slices.reduce((a, b) => { return a + b.data.value }, 0)

        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            let percentage = data.value ? ((data.value * 100) / totalVictim) : 0
            return (
                <SvgText
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={percentage <= 4 ? 10 : 16}
                    stroke={'white'}
                    strokeWidth={0.2}
                >
                    {parseInt(percentage) ? `${(parseInt(percentage))}${(percentage <= 1 ? '' : '%')}` : ''}
                </SvgText>
            )
        })
    }

    const onLoadStats = (data) => {
        return data.map((item, index) => {
            return (
                <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name="square" style={styles.iconStyle} size={16} color={color[index]} />
                        <Text>{statsString[index]}</Text>
                    </View>
                    <NumberFormatGenerator value={item} />
                </View>
            )
        })

    }

    return (
        <Card>
            <View style={styles.pieChartView}>
                <View style={styles.chartHeading}>
                    <Image
                        style={{ height: 18, width: 28, margin: 8 }}
                        source={{ uri: `${countryInfo && countryInfo.flag}` }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{country || ''}</Text>
                </View>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            { translateX: position.x },
                            { rotate: rotate }
                        ]
                    }}
                >

                    <PieChart
                        style={{ height: 200 }}
                        valueAccessor={({ item }) => item.value}
                        data={pieData}
                        spacing={0}
                        padAngle={0}
                        //innerRadius={50}
                        outerRadius={95}
                    //labelRadius={110} //to position the label outside pie
                    >
                        <Labels />
                    </PieChart>
                </Animated.View>

                <View style={styles.statsView}>
                    {onLoadStats(data)}
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    statsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5
    },
    chartHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    pieChartView: {
        marginTop: 5,
        marginBottom: 10,
        paddingVertical: 5
    },
    iconStyle: {
        marginRight: 8,
        marginVertical: 8
    }
})
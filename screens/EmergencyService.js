import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import { Card, Title } from 'react-native-paper'
import AppTopBar from '../components/AppTopBar'
import { emergencyData } from '../data/emergencyData'
import { MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import AutoScrolling from "react-native-auto-scrolling";


export const EmergencyService = ({ navigation, route }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(emergencyData)
    }, [])

    const renderItem = (data) => {
        return (
            <Card>
                {data.map((item, index) => {
                    return (
                        <Card style={styles.itemCard} key={index} >
                            <TouchableOpacity style={styles.itemView} onPress={() => Linking.openURL(`${item.link}:${item.data}`)}>
                                <View >
                                    {

                                        item.logo == "phone" &&
                                        <Entypo
                                            name={item.logo}
                                            size={28}
                                            style={styles.iconStyle}
                                            color={Colors.IconColor}
                                        />
                                        ||
                                        item.logo == "email" &&
                                        <MaterialIcons
                                            name={item.logo}
                                            size={28}
                                            style={styles.iconStyle}
                                            color={Colors.IconColor}
                                        />
                                        ||
                                        item.logo == "web" &&
                                        <MaterialCommunityIcons
                                            name={item.logo}
                                            size={28}
                                            style={styles.iconStyle}
                                            color={Colors.IconColor}
                                        />

                                    }
                                </View>
                                <View style={styles.itemTextView} >
                                    <Text style={{ ...styles.itemText, color: Colors.IconColor }}>{item.data}</Text>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    )
                })
                }
            </Card>
        )
    }


    return (
        <View style={styles.container}>
            <AppTopBar navigation={navigation} route={route} enableBackButton={true} />

            <View style={styles.cardView}>
                <Card style={styles.headerCard}>
                    <AutoScrolling endPaddingWidth={50} >
                        <View>
                            <Text style={styles.headerText} >
                                জ্বর, সর্দি, কাশি হলে নিম্নক্ত নাম্বারে কল করে সেবা নিন। এবং করোনা ভাইরাস সংক্রান্ত বিস্তারিত তথ্য পেতে বা করোনা টেস্ট এর জন্য ওয়েবসাইট ভিজিট করুন।
                            </Text>
                        </View>
                    </AutoScrolling>
                </Card>

                {renderItem(data)}

                <Card style={styles.secondCard}>
                    <View style={{ justifyContent: 'space-evenly' }}>
                        <Title style={styles.title} >যে কোন ধরণের জরুরী প্রয়োজনে কল করুন</Title>
                        <TouchableOpacity onPress={() => Linking.openURL('tel:999')}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <MaterialCommunityIcons
                                    name="phone-settings"
                                    size={38}
                                    style={styles.iconStyle}
                                    color={Colors.IconColor}
                                />
                                <Text style={{ ...styles.title, fontSize: 44, color: Colors.IconColor, marginBottom: 7 }} >৯৯৯</Text>
                            </View>
                        </TouchableOpacity>
                        <Title style={{ ...styles.title, fontSize: 44, color: Colors.IconColor, paddingTop: 16 }}>এ</Title>
                    </View>
                </Card>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardView: {
        margin: 16,
    },
    headerCard: {
        padding: 10,
    },
    headerText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 24,
        color: '#EF5350',
    },
    itemCard: {
        marginTop: 3,
        padding: 3
    },
    itemView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        margin: 8
    },
    itemTextView: {
        padding: 5,
        marginLeft: 3,
    },
    itemText: {
        fontSize: 16,
        fontWeight: "600",
        opacity: 0.9,
    },
    secondCard: {
        marginVertical: 10,
        padding: 16,
    },
    title: {
        textAlign: 'center',
    },
    scrollingText: {
        width: 400,
        padding: 10,
        marginBottom: 10,
    }
})

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Clipboard, Linking, TouchableOpacity } from 'react-native'
import AppTopBar from '../components/AppTopBar'
import { Card, Title, Snackbar } from 'react-native-paper'
import { donationData } from '../data/donationData'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import AutoScrolling from "react-native-auto-scrolling";

export const Donation = ({ navigation, route }) => {

    const [data, setData] = useState([])
    const [snackBar, setSnackBar] = useState(false)

    useEffect(() => {
        setData(donationData)
    }, [])


    const renderList = ({ image, title, bkash, bkash1, rocket, nagad, paypal, facebook, website }) => {
        return (
            <Card style={{ ...styles.mainCard, ...styles.cardView }}>
                <View>
                    <Image
                        style={styles.cardImageItem}
                        source={image}
                    />
                    <Title style={{ color: Colors.IconColor, fontWeight: "700", textAlign: 'center', opacity: .8 }}>{title}</Title>
                    <Card>
                        {bkash.number ?
                            <Card style={styles.itemCard} >
                                <TouchableOpacity style={styles.itemView} onPress={() => { Clipboard.setString(`${bkash.number}`); setSnackBar(true) }} >
                                    <Image
                                        style={styles.imgLogo}
                                        source={require('../assets/images/donation_logo/new/bkash.png')}
                                    />
                                    <Text>{bkash.number}</Text>
                                    <Text>{bkash.type ? ` (${bkash.type})` : ''}</Text>
                                </TouchableOpacity>
                            </Card> : null
                        }

                        {bkash1.number ?
                            <Card style={styles.itemCard} >
                                <TouchableOpacity style={styles.itemView} onPress={() => { Clipboard.setString(`${bkash1.number}`); setSnackBar(true) }} >
                                    <Image
                                        style={styles.imgLogo}
                                        source={require('../assets/images/donation_logo/new/bkash.png')}
                                    />
                                    <Text>{bkash1.number}</Text>
                                    <Text>{bkash1.type ? ` (${bkash1.type})` : ''}</Text>
                                </TouchableOpacity>
                            </Card> : null
                        }

                        {rocket.number ?
                            <Card style={styles.itemCard} >
                                <TouchableOpacity style={styles.itemView} onPress={() => { Clipboard.setString(`${rocket.number}`); setSnackBar(true) }} >
                                    <Image
                                        style={styles.imgLogo}
                                        source={require('../assets/images/donation_logo/new/rocket.png')}
                                    />
                                    <Text>{rocket.number}</Text>
                                    <Text>{rocket.type ? ` (${rocket.type})` : ''}</Text>
                                </TouchableOpacity>
                            </Card> : null
                        }

                        {nagad.number ?
                            <Card style={styles.itemCard} >
                                <TouchableOpacity style={styles.itemView} onPress={() => { Clipboard.setString(`${nagad.number}`); setSnackBar(true) }} >
                                    <Image
                                        style={styles.imgLogo}
                                        source={require('../assets/images/donation_logo/new/nagad.png')}
                                    />
                                    <Text>{nagad.number}</Text>
                                    <Text>{nagad.type ? ` (${nagad.type})` : ''}</Text>
                                </TouchableOpacity>
                            </Card> : null
                        }

                        {paypal ?
                            <Card style={styles.itemCard} >
                                <TouchableOpacity style={styles.itemView} onPress={() => { Clipboard.setString(`${paypal}`); setSnackBar(true) }} >
                                    <Entypo
                                        name="paypal"
                                        size={28}
                                        style={styles.iconStyle}
                                        color={Colors.IconColor}
                                    />
                                    <Text>{paypal}</Text>
                                </TouchableOpacity>
                            </Card> : null
                        }

                        {website ?
                            <Card style={styles.itemCard} >
                                <TouchableOpacity style={styles.itemView} onPress={() => Linking.openURL(`http:${website}`)} >
                                    <MaterialCommunityIcons
                                        name="web"
                                        size={28}
                                        style={styles.iconStyle}
                                        color={Colors.IconColor}
                                    />
                                    <Text>{website}</Text>
                                </TouchableOpacity>
                            </Card> : null
                        }
                    </Card>

                </View>
            </Card >
        )
    }

    return (
        <View style={styles.container}>
            <AppTopBar navigation={navigation} route={route} enableBackButton={true} />


            <View style={styles.cardView}>
                <Card style={styles.headerCard}>
                    <AutoScrolling endPaddingWidth={50} >
                        <Text style={styles.headerText} delay={0} duration={6000} >
                            এই মহামারি পরিস্থিতিতে সরকারের পাশাপাশি বিভিন্ন অলাভজনক ও সামাজিক সংগঠন কাজ করে যাচ্ছে। আশা করছি আপনিও স্বেচ্ছাসেবক হিসাবে কিংবা অনুদান দিয়ে এই পরিস্থিতি মোকাবেলায় পাশে থাকবেন।
                        </Text>
                    </AutoScrolling>
                </Card>
            </View>
            <Snackbar
                visible={snackBar}
                onDismiss={() => setSnackBar(false)}
                duration={500}
                style={{ backgroundColor: Colors.IconColor }}
            >
                Copied To Clipboard.
            </Snackbar>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={(item, index) => `${index}`}
                maxToRenderPerBatch={3}
                initialNumToRender={3}
            />




        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardView: {
        marginHorizontal: 16,
        marginVertical: 12,
    },
    headerCard: {
        padding: 10,
    },
    headerText: {
        padding: 10,
        fontSize: 24,
        textAlign: 'center',
        color: Colors.IconColor,
    },
    cardImageItem: {
        height: 128,
        width: 128,
        borderRadius: 64,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'rgba(16, 168, 129, .7)',
        margin: 14,
    },
    imgLogo: {
        height: 24,
        width: 24,
        margin: 11
    },
    iconStyle: {
        margin: 8
    },
    itemView: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})

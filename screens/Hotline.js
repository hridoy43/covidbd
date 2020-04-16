import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, FlatList } from 'react-native'
import { Card } from 'react-native-paper'
import AppTopBar from '../components/AppTopBar'
import { MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { IEDCR_Data } from '../data/IEDCR_Data'


export const Hotline = ({ navigation, route }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(IEDCR_Data)
    }, [])

    const renderList = (item) => {
        return (
            <Card style={styles.itemCard} >
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
                        <Text style={styles.itemText}>{item.data}</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        )
    }




    return (
        <View style={styles.container}>
            <AppTopBar navigation={navigation} route={route} enableBackButton={true} />

            <View style={styles.mainCardView}>
                <Card style={styles.mainCard}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return renderList(item)
                        }}
                        keyExtractor={(item, index) => `${index}`}
                    />

                </Card>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainCard: {
        margin: 16,
        height: "90%"
    },
    itemCard: {
        margin: 3,
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
        opacity: 0.8,
    }
})

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Card, Title } from 'react-native-paper'
import { precautionData } from '../data/precautionData'
import AppTopBar from '../components/AppTopBar'


const PrecautionScreen = ({ navigation, route }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(precautionData)
    }, [])

    const renderList = (item) => {
        return (
            <Card style={styles.itemCard}>
                <View style={styles.itemView}>
                    <View style={styles.itemImageView}>
                        <Image style={styles.itemImage} source={item.logo} />
                    </View>
                    <View style={styles.itemContentView}>
                        <Text>{item.content}</Text>
                    </View>

                </View>
            </Card>
        )
    }

    return (
        <View style={styles.container}>
            <AppTopBar navigation={navigation} route={route} />
            <Card style={styles.card}>
                <View style={styles.titleView}>
                    <Title>সতর্কতা সমূহ</Title>
                </View>
            </Card>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={(item, index) => `${index}`}
                maxToRenderPerBatch={5}
                initialNumToRender={5}
            />
        </View>
    )
}

const theme = {
    colors: {
        primary: '#10A881',
        accent: '#ffffff'

    }
}

export default PrecautionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    card: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontWeight: '700'
    },
    itemCard: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        margin: 5
    },
    itemView: {
        flexDirection: 'row'
    },
    itemImageView: {
        flex: 1
    },
    itemContentView: {
        flex: 3,
        padding: 4,
        marginRight: 4,
        justifyContent: 'center',

    },
    itemImage: {
        height: 64,
        width: 64,
        margin: 8
    }
})

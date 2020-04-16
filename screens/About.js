import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Title, Headline } from 'react-native-paper'
import AppTopBar from '../components/AppTopBar'
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Constants from 'expo-constants'


export const About = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <AppTopBar navigation={navigation} route={route} enableBackButton={true} />
            <View style={styles.mainView}>
                <View style={{ alignItems: 'center' }}>
                    <Headline>COVID BD</Headline>
                    <Text>Version {Constants.manifest.version}</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text>Developed By Wahiduzzaman Hridoy</Text>
                    <Text>A DevDuck Product</Text>
                    <Text>Made With ♥ </Text>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <Title>Contact Us</Title>

                    <View style={styles.iconView}>
                        <Entypo
                            name="facebook"
                            size={34}
                            style={styles.iconStyle}
                            color={Colors.IconColor}
                            onPress={() => Linking.openURL('https:fb.me/hridoy43')}
                        />
                        <Entypo
                            name="mail"
                            size={34}
                            style={styles.iconStyle}
                            color={Colors.IconColor}
                            onPress={() => Linking.openURL('mailto:hridoy43@gmail.com')}
                        />
                        <Entypo
                            name="github"
                            size={34}
                            style={styles.iconStyle}
                            color={Colors.IconColor}
                            onPress={() => Linking.openURL('https:www.github.com/hridoy43')}
                        />
                        <Entypo
                            name="twitter"
                            size={34}
                            style={styles.iconStyle}
                            color={Colors.IconColor}
                            onPress={() => Linking.openURL('https:www.twitter.com/hriody43')}
                        />
                        <Entypo
                            name="linkedin"
                            size={34}
                            style={styles.iconStyle}
                            color={Colors.IconColor}
                            onPress={() => Linking.openURL('https:www.linkedin.com/in/hridoy43')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView: {
        margin: 16,
        height: '85%',
        justifyContent: 'space-between'
    },
    iconView: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        margin: 8
    }
})

import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { Divider } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Constants from 'expo-constants'

const Sidebar = (props) => {

    return (
        <View style={{ flex: 1, }}>
            < View style={styles.customStatusBar}></View>
            <View style={styles.container} >
                <View style={styles.centerView}>
                    <Image style={{ height: 100, width: 100, margin: 16, borderRadius: 50 }}
                        source={require('../assets/covid-icon/128/corona.png')}

                    />
                </View>
                <Divider />

                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
                <View style={styles.centerView}>
                    <Text style={{ position: 'absolute', bottom: 0 }}>Version {Constants.manifest.version}</Text>
                </View>
            </View>
        </View >
    )
}

export default Sidebar

const styles = StyleSheet.create({
    customStatusBar: {
        height: Constants.statusBarHeight,
        width: '100%',
        backgroundColor: '#095440'
    },
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        marginBottom: 16,
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerListView: {
        marginBottom: 16,
        justifyContent: 'space-evenly'
    }
})

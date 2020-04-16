import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const AppTopBar = ({ title, navigation, route, enableBackButton, position }) => {

    return (
        <Appbar.Header style={styles.appbarHeader} statusBarHeight={Constants.statusBarHeight} theme={theme}>
            {enableBackButton && <Appbar.BackAction onPress={() => navigation.goBack()} />}
            <Appbar.Content
                title={title || route.name}
                style={position == 'center' && styles.centerTitle}
            />
            <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        </Appbar.Header>
    )
}

const theme = {
    colors: {
        primary: '#10A881',
        accent: '#ffffff'

    }
}

export default AppTopBar

const styles = StyleSheet.create({
    centerTitle: {
        alignItems: 'center',
        marginLeft: 44
    },
})

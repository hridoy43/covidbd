import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Sidebar from '../components/Sidebar'
import { Hotline, About, EmergencyService, Donation } from '../screens/DrawerScreen'


const Drawer = createDrawerNavigator();


const DrawerNavigator = ({ navigation, route }) => {

    navigation.setOptions({
        headerShown: false
    });

    return (
        <Drawer.Navigator initialRouteName="Drawer" drawerContent={props => <Sidebar {...props} />} >
            <Drawer.Screen name="হোম" component={BottomTabNavigator} />
            <Drawer.Screen name="আইইডিসিআর হটলাইন" component={Hotline} />
            <Drawer.Screen name="জরুরী সেবা" component={EmergencyService} />
            <Drawer.Screen name="সহায়তা" component={Donation} />
            <Drawer.Screen name="আমাদের সম্পর্কে" component={About} />
        </Drawer.Navigator>

    )
}

export default DrawerNavigator

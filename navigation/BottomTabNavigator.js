import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import AppTabBar from '../components/AppTabBar';
import HomeScreen from '../screens/HomeScreen';
import GlobalScreen from '../screens/GlobalScreen';
import PrecautionScreen from '../screens/PrecautionScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerShown: false
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBar={props => <AppTabBar {...props} />}  >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: "true",
          title: 'BD',
          tabBarIcon: ({ isFocused }) => <TabBarIcon focused={isFocused} name="flag" font="FontAwesome" />,
        }}
      />
      <BottomTab.Screen name="Global" component={GlobalScreen}
        options={{
          title: 'Global',
          tabBarIcon: ({ isFocused }) => <TabBarIcon focused={isFocused} name="globe" font="SimpleLineIcons" />,
        }}
      />
      <BottomTab.Screen name="Precaution" component={PrecautionScreen}
        options={{
          title: 'Precaution',
          tabBarIcon: ({ isFocused }) => <TabBarIcon focused={isFocused} name="stethoscope" font="FontAwesome" />,
        }}
      />
    </ BottomTab.Navigator >
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'COVID BD';
    case 'Global':
      return 'Global Update';

  }
}

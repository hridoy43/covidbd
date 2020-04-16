import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';


export default function AppTabBar({ state, descriptors, navigation }) {

    return (

        <Appbar theme={theme} style={styles.appbar}>

            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const Icon = options.tabBarIcon({ isFocused })

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                // const onLongPress = () => {
                //     navigation.emit({
                //         type: 'tabLongPress',
                //         target: route.key,
                //     });
                // };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        //onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                        key={route.key}
                    >
                        <View>
                            {Icon}
                        </View>
                        <Text style={{ color: isFocused ? '#f5f5f5' : '#00695c', marginBottom: -3 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </Appbar>
    );
}

const theme = {
    colors: {
        primary: '#10A881',
        accent: '#ffffff'

    }
}

const styles = StyleSheet.create({
    appbar: {
        height: 54
    }
})
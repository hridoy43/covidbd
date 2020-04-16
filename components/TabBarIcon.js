import * as React from 'react';
import { Ionicons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {

  return (

    props.font == "FontAwesome" &&
    <FontAwesome
      name={props.name}
      size={props.size || 24}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    /> ||
    props.font == "SimpleLineIcons" &&
    <SimpleLineIcons
      name={props.name}
      size={props.size || 24}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
    ||
    <Ionicons
      name={props.name}
      size={props.size || 24}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
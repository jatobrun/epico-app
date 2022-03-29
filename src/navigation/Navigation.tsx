import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Home';
import AccountScreen from '../screens/Account';
import ActivitiesScreen from '../screens/Activities';
import { IconFill, IconOutline  } from "@ant-design/icons-react-native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';
          switch ( route.name ) {
            case 'Home':
              iconName = 'fingerprint-off'
              break;
          }

          return <Maticon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        style: {
          backgroundColor: 'cyan'
        }
      })}
      >
        <Tab.Screen name="Home" component={ HomeScreen } />
        <Tab.Screen name="Activities" component={ ActivitiesScreen } />
        <Tab.Screen name="Account" component={ AccountScreen } />
    </Tab.Navigator>
  )
}
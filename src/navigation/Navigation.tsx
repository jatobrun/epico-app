import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Home';
import EntrepreneursScreen from '../screens/Entrepreneurs';
import ActivitiesScreen from '../screens/Activities';
import CalendarScreen from '../screens/Calendar';
import TicketsScreen from '../screens/Tickets';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';
          switch ( route.name ) {
            case 'Home':
              iconName = 'home'
              break;
            case 'Entrepreneurs':
              iconName = 'account-group'
              break;
            case 'Activities':
              iconName = 'bulletin-board'
              break;
            case 'Calendar':
              iconName = 'calendar-month-outline'
              break;
          }
          if ( route.name == 'Tickets' ) {
            return (
              <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: '#4C17BF',
                borderRadius: 32,
                padding: 8,
                position: 'absolute',
                top: -16
              }}>
                <Maticon name="checkbox-marked-circle-plus-outline" size={48} color='#FFF' />
              </View>
            );
          }

          return (
            <View style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Maticon name={iconName} size={28} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: '#4C17BF',
        tabBarInactiveTintColor: '#333333',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 30,
          marginHorizontal: 24,
          height: 60,
          borderRadius: 10,
          paddingHorizontal: 16
        }
      })}
      >
        <Tab.Screen name="Home" component={ HomeScreen } />
        <Tab.Screen name="Activities" component={ ActivitiesScreen } />
        <Tab.Screen name="Tickets" component={ TicketsScreen } />
        <Tab.Screen name="Entrepreneurs" component={ EntrepreneursScreen } />
        <Tab.Screen name="Calendar" component={ CalendarScreen } />
    </Tab.Navigator>
  )
}
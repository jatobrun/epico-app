import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from '../screens/HomeScreen';
import EntrepreneursScreen from '../screens/Entrepreneurs';
import ActivitiesScreen from '../screens/Activities';
import CalendarScreen from '../screens/MyCalendar';
import { TicketsScreen } from '../screens/Tickets';
import { View } from 'react-native';
import { styles } from '../theme';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabsNav() {
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
              <View style={ styles.navButtonCenter }>
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
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey1,
        tabBarShowLabel: false,
        tabBarStyle: styles.navMain
      })}
      >
        <Tab.Screen
        options={{
          headerShown: false
        }} name="Home" component={ HomeScreen } />
        <Tab.Screen name="Activities" component={ ActivitiesScreen } />
        <Tab.Screen name="Tickets" component={ TicketsScreen } />
        <Tab.Screen name="Entrepreneurs" component={ EntrepreneursScreen } />
        <Tab.Screen name="Calendario" component={ CalendarScreen } />
    </Tab.Navigator>
  )
}
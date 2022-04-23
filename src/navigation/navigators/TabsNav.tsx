import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

import { MyActivitiesScreen } from '../../features/activity/screens/MyActivitiesScreen';
import { MyCalendarScreen }   from '../../features/calendary/screens/MyCalendarScreen';
import { MyTicketsScreen }    from '../../features/support/screens/MyTicketsScreen';
import { HomeScreen }         from '../../features/home/screens/HomeScreen';
import { colors }             from '../../theme/colors';
import { CommunityScreen }    from '../../features/community/screens/CommunityScreen';

const Tab = createBottomTabNavigator();

export const TabsNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation , route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';
          switch ( route.name ) {
            case 'Dashboard':
              iconName = 'home'
              break;
            case 'Community':
              iconName = 'account-group'
              break;
            case 'Activities':
              iconName = 'bulletin-board'
              break;
            case 'MyCalendar':
              iconName = 'calendar'
              break;
          }
          
          if ( route.name == 'Tickets' ) {
            return (
              <TouchableOpacity 
                style={ styles.navButtonCenter }
                onPress={ () => navigation.navigate( route ) }
              >
                <Maticon name="checkbox-marked-circle-plus-outline" size={48} color='#FFF' />
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={ () => navigation.navigate( route ) }
            >
              <Maticon name={iconName} size={28} color={color} />
            </TouchableOpacity>
          );
        },
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey1,
        tabBarShowLabel: false,
        tabBarStyle: styles.navMain,
        tabBarHideOnKeyboard: true
      })}
  
    >
      <Tab.Screen name="Dashboard" component={ HomeScreen } />
      <Tab.Screen name="Activities" component={ MyActivitiesScreen } />
      <Tab.Screen name="Tickets" component={ MyTicketsScreen } />
      <Tab.Screen name="Community"  component={ CommunityScreen } />
      <Tab.Screen name="MyCalendar"  component={ MyCalendarScreen } />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  navMain: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 24,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 16
  },
  navButtonCenter :{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 32,
    padding: 8,
    position: 'absolute',
    top: -16
  }
})
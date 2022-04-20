import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { LoginScreen } from '../../features/auth/screens/LoginScreen';

const Stack = createNativeStackNavigator();


export const AuthNav = () => {
  return (
    <Stack.Navigator
        screenOptions={ configScreenOptions }
    >
		<Stack.Screen name="Login" component={ LoginScreen } />
	</Stack.Navigator>
  )
}

const configScreenOptions : NativeStackNavigationOptions = {
    headerShown: false
}
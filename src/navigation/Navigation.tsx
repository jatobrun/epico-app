import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabsNav from './TabsNav';
import { LoginScreen } from '../screens/login/LoginScreen';
import { AuthContext } from '../context/authContext/AuthContext';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
	const { status } = useContext( AuthContext);
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			{
				status === 'authenticated'
					? (
						<Stack.Screen name="Tabs" component={ TabsNav } />
					)
					: (
						<Stack.Screen name="Login" component={LoginScreen} />
					)
			}
		</Stack.Navigator>
	)
}
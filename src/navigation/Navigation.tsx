import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabsNav from './TabsNav';
import { LoginScreen } from '../screens/LoginScreen';
import { AuthContext } from '../context/authContext/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
	const { status } = useSelector( ( state: RootState ) => state.Auth );
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
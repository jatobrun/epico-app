import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Snackbar } from 'react-native-paper';

import { styles } from '../theme'
import { useDispatch } from 'react-redux';
import { logout } from '../store/features/auth/actions';

export const HomeScreen = () => {
	const dispatch = useDispatch();


	const [visible, setVisible] = useState(false);
	const onToggleSnackBar = () => setVisible(!visible);
	const onDismissSnackBar = () => setVisible(false);

	const logOut = () => {
		console.log('go to Logout')
		dispatch( logout() );
    }
	return (
		<View style={ styles.mainContainer }>
			<Button mode="outlined" onPress={onToggleSnackBar}>Logout</Button>

			<Snackbar
				visible={visible}
				wrapperStyle={{ position: 'relative' , top: 250 }}
				onDismiss={onDismissSnackBar}
				action={{
					label: 'Si',
					onPress: () => {
						logOut()
					},
				}}>
				Cerrando sesión
			</Snackbar>

		</View>
	)
}
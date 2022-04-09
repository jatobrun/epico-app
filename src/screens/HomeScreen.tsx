import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Snackbar } from 'react-native-paper';

import { styles } from '../theme'
import { AuthContext } from '../context/authContext/AuthContext';

export const HomeScreen = () => {

	const { logOut } = useContext( AuthContext )

	const [visible, setVisible] = useState(false);
	const onToggleSnackBar = () => setVisible(!visible);
	const onDismissSnackBar = () => setVisible(false);

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
					logOut
				},
				}}>
				Cerrando sesión
			</Snackbar>

		</View>
	)
}
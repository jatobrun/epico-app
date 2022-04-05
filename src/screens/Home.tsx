import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import {
	Toast
} from '@ant-design/react-native';


export default function Home( ) {
	const showToast = () => {
		console.log('Show toast');
		Toast.info('This is a toast tips 1 !!!', 4);
	}
	return (
		<View style={ styles.mainContainer }>
			<Text>Screen Home</Text>
			<Button title="Toast" onPress={ showToast } />
		</View>
	)
}
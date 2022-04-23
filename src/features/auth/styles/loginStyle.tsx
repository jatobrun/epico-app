import { StyleSheet } from "react-native"

export const loginStyle = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: 'space-between'
	},
	brands: {
		padding: 20,
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logoEpico: {
		width: 180,
		height: 70,
		resizeMode: 'contain',
	},
	logoAlcaldia: {
		width: 100,
		height: 70,
		resizeMode: 'contain',
	},
	logoCe: {
		width: '100%',
		maxWidth: 320,
		height: 120,
		margin: 0,
		resizeMode: 'contain',
	},
})
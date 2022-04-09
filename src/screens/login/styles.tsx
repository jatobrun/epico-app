import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: 'space-between'
	},
	formBox: {
		padding: 24
	},
	brands: {
		padding: 24,
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
		width: 280,
		height: 95,
		marginLeft: 24,
		resizeMode: 'contain',
	},
	buttonSignin: {
		borderRadius: 8
	},
	buttonRegister: {
		borderRadius: 8,
		backgroundColor: colors.secondary
	},
	buttonRecovery: {
		marginVertical: 15,
		borderRadius: 8,
		backgroundColor: '#FFFFFF',
		borderColor: colors.secondary,
		borderWidth: 3
	},
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
})


import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const loginFormStyle = StyleSheet.create({
	formBox: {
		padding: 20
	},
	buttonSignin: {
		borderRadius: 8,
	},
	buttonTextSignIn: {
		fontSize: 16,
		textTransform: 'uppercase'
	},
	buttonRegister: {
		borderRadius: 8,
		backgroundColor: colors.secondary,
	},
	buttonRecovery: {
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
	buttons: {
		alignItems: 'center'
	},
	snackBarMessage: {
		position: 'absolute',
		bottom: 0,
		left: 15,
		right: 15
	}
})
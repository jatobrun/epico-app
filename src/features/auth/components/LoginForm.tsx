import React, { useContext, useEffect } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Separator } from '../../../components/Separator';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { useForm } from '../../../hooks/useForm';
import { colors } from '../../../theme/colors';
import { loginFormStyle } from '../styles/LoginFormStyle';

export const LoginForm = () => {

	const { signIn, errorMessage, removeError } = useContext( AuthContext );

	
	const { correo, password } = useForm({
		correo: 'constantino.isaias@mail.com',
		password: '0111111111' 
	});
	

	useEffect(() => {
		if( errorMessage.length === 0 ) return;
		Alert.alert( 'Login incorrecto', errorMessage,[{
			text: 'Ok',
			onPress: removeError
		}]);
	}, [ errorMessage ])

	
    const onLogin = () => {
        Keyboard.dismiss();
		console.log( correo, password )
        signIn({ correo, password });
    }
	return (
		<View style={ loginFormStyle.formBox }>
			<TextInput
				label="Usuario"
				placeholder="Ingrese su usuario"
				value={ correo }
				autoCapitalize="none"
				autoCorrect={ false }
			/>
			<Separator />
			<TextInput
				label="Contraseña"
				placeholder="Ingrese su contraseña"
				value={ password }
			/>
			<Separator />
			<Button 
				mode="contained" 
				uppercase={ false }
				labelStyle={ loginFormStyle.buttonTextSignIn }
				style={ loginFormStyle.buttonSignin } 
				onPress={ onLogin }>
				Iniciar sesión
			</Button>
			<Separator />
			<Button 
				mode="contained"
				uppercase={ false }
				style={ loginFormStyle.buttonRegister } 
				onPress={() => console.log('Pressed')}>
				Registrar mi cuenta
			</Button>
			<Separator />
			<Button 
				mode="text"
				color={ colors.secondary }
				uppercase={ false }
				style={ loginFormStyle.buttonRecovery } 
				onPress={() => console.log('Pressed')}>
				¿Olvidaste tu cuenta?
			</Button>
		</View>
	)
}

import React, { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Separator } from '../../../components/Separator';
import { useForm } from '../../../hooks/useForm';
import { doLogin } from '../../../store/features/auth.store';
import { colors } from '../../../theme/colors';
import { loginFormStyle } from '../styles/LoginFormStyle';

export const LoginForm = () => {
	const dispatch = useDispatch();
	const [ passwordVisible, setPasswordVisible ] = useState(true)
	const [ loading, setLoading ] = useState(false);

	const { correo, password, onChange } = useForm({
		correo: '',
		password: '' 
	});
	

    const onLogin = () => {
		setLoading( true )
        Keyboard.dismiss();
		console.log( correo, password , loading)
		dispatch( doLogin( correo, password ) )
    }
	return (
		<View style={ loginFormStyle.formBox }>
			<TextInput
				label="Usuario"
				placeholder="Ingrese su usuario"
				value={ correo }
				onChangeText={ (value) => onChange( value , 'correo') }
				autoCapitalize="none"
				autoCorrect={ false }
			/>
			<Separator />
			<TextInput
				label="Contraseña"
				placeholder="Ingrese su contraseña"
				value={ password }
				onChangeText={ (value) => onChange( value , 'password') }
				autoCapitalize="none"
				autoCorrect={ false }
				secureTextEntry={passwordVisible}
				right={
					<TextInput.Icon 
						name={ passwordVisible ? "eye" : "eye-off" } 
						onPress={ () => setPasswordVisible(!passwordVisible) } 
					/>
				}
			/>
			<Separator />
			<Button 
				mode="contained" 
				loading={ loading }
				disabled={ loading }
				uppercase={ false }
				labelStyle={ loginFormStyle.buttonTextSignIn }
				style={ loginFormStyle.buttonSignin } 
				onPress={ () => onLogin() }>
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

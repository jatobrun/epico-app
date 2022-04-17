import React, { useContext, useEffect } from 'react';

import { Alert, Image, Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { doLogin } from '../store/features/auth/actions';

import { SeparatorTagline } from '../components/SeparatorTagline';
import { loginStyles } from '../theme/styles/login';
import { colors } from '../theme/colors';
import { MyCopyright } from '../components/Copyright';
import { RootState } from '../store';

interface Props extends NativeStackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {

	const dispatch = useDispatch();

    const { correo, password } = useForm({
		correo: '',
		password: '' 
	});
	const { token , user , codigo } = useSelector(( state: RootState ) => state.Auth );

    const onLogin = () => {
        Keyboard.dismiss();
		dispatch( doLogin( correo, password ) );
    }

	const inputLogin = ''
	const inputActionHandler = ( type: string, payload: string ) => {
		console.log( type, payload )
	}
	return (
		<SafeAreaView style={ loginStyles.main }>
			<View>
				<View style={ loginStyles.brands }>
					<Image 
						style={ loginStyles.logoEpico } 
						source={ require('../assets/images/brands/logo-epico.png') } 
					/>
					<Image 
						style={ loginStyles.logoAlcaldia } 
						source={ require('../assets/images/brands/logo-alcaldia-guayaquil.png') } 
					/>
				</View>
				<Image 
					style={ loginStyles.logoCe } 
					source={ require('../assets/images/brands/logo-centro-de-emprendimiento.png') } 
				/>
				<View style={ loginStyles.formBox }>
					<TextInput
						label="Usuario"
						placeholder="Ingrese su usuario"
						value={correo}
						onChangeText={flatDense => inputActionHandler('flatDense', flatDense)}
                        autoCapitalize="none"
                        autoCorrect={ false }
					/>
					<View style={{ height: 15 }} />
					<TextInput
						label="Contraseña"
						placeholder="Ingrese su contraseña"
						value={password}
						onChangeText={flatDense => inputActionHandler('flatDense', flatDense)}
					/>
					<View style={{ height: 15 }} />
					<Button 
						mode="contained" 
						uppercase={ false }
						style={ loginStyles.buttonSignin } 
						onPress={ onLogin }>
						Iniciar sesión
					</Button>
					
					<Button 
						mode="contained"
						uppercase={ false }
						style={ loginStyles.buttonRegister } 
						onPress={() => console.log('Pressed')}>
						Registrar mi cuenta
					</Button>
					<Button 
						mode="text"
						color={ colors.secondary }
						uppercase={ false }
						style={ loginStyles.buttonRecovery } 
						onPress={() => console.log('Pressed')}>
						¿Olvidaste tu cuenta?
					</Button>
				</View>
			</View>
			<MyCopyright />
		</SafeAreaView>
	)
}

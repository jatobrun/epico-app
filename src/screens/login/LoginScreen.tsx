import React, { useContext, useEffect } from 'react';

import { Alert, Image, Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthContext } from '../../context/authContext/AuthContext';
import { useForm } from '../../hooks/useForm';

import { SeparatorTagline } from '../../components/SeparatorTagline';
import { styles } from './styles';
import { colors } from '../../theme/colors';
import { Copyright } from '../../components/Copyright';

interface Props extends NativeStackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {

    const { signIn, fakeLogin, errorMessage, removeError } = useContext( AuthContext );

    const { correo, password, onChange } = useForm({
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
        console.log({correo, password});
        Keyboard.dismiss();
		// navigation.navigate('Tabs')
		fakeLogin()
        // signIn({ correo: correo, password });
    }

	const inputLogin = ''
	const inputActionHandler = ( type: string, payload: string ) => {
		console.log( type, payload )
	}
	return (
		<SafeAreaView style={ styles.main }>
			<View>
				<View style={ styles.brands }>
					<Image 
						style={ styles.logoEpico } 
						source={ require('../../assets/images/brands/logo-epico.png') } 
					/>
					<Image 
						style={ styles.logoAlcaldia } 
						source={ require('../../assets/images/brands/logo-alcaldia-guayaquil.png') } 
					/>
				</View>
				<Image 
					style={ styles.logoCe } 
					source={ require('../../assets/images/brands/logo-centro-de-emprendimiento.png') } 
				/>
				<View style={ styles.formBox }>
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
						style={ styles.buttonSignin } 
						onPress={ onLogin }>
						Iniciar sesión
					</Button>
					<SeparatorTagline />
					<Button 
						mode="contained"
						uppercase={ false }
						style={ styles.buttonRegister } 
						onPress={() => console.log('Pressed')}>
						Registrar mi cuenta
					</Button>
					<Button 
						mode="text"
						color={ colors.secondary }
						uppercase={ false }
						style={ styles.buttonRecovery } 
						onPress={() => console.log('Pressed')}>
						¿Olvidaste tu cuenta?
					</Button>
				</View>
			</View>
			<Copyright />
		</SafeAreaView>
	)
}

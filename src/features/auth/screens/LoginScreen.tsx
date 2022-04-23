import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { LoginFooter } from '../components/LoginFooter';
import { LoginForm } from '../components/LoginForm';
import { LoginHeader } from '../components/LoginHeader';
import { loginStyle } from '../styles/loginStyle';

export const LoginScreen = () => {
  return (
	<SafeAreaView 
		style={ loginStyle.main }
	>
		<LoginHeader />
		<LoginForm />
		<LoginFooter />
	</SafeAreaView>
  )
}

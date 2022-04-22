import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { LoadingModal } from '../../shared/components/LoadingModal';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { LoginFooter } from '../components/LoginFooter';
import { LoginForm } from '../components/LoginForm';
import { LoginHeader } from '../components/LoginHeader';
import { loginStyle } from '../styles/loginStyle';

export const LoginScreen = () => {
	const { isLoading } = useContext( AuthContext );
  return (
	<SafeAreaView 
		style={ loginStyle.main }
	>
		<LoginHeader />
		<LoginForm />
		<LoginFooter />
		{ ( isLoading === true ) && <LoadingModal /> }
	</SafeAreaView>
  )
}

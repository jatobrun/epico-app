import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { images } from '../../../assets/media';
import { loginStyle } from '../styles/loginStyle';

export const LoginHeader = () => {
  return (
	<View>
		<View
			style={ loginStyle.brands }
		>
			<Image 
				style={ loginStyle.logoEpico } 
				source={ images.logoEpico } 
			/>
			<Image 
				style={ loginStyle.logoAlcaldia } 
				source={ images.logoAlcaldia } 
			/>
		</View>
		<View style={{ 
			alignItems: 'center',
		}}>
			<Image 
				style={ loginStyle.logoCe } 
				source={ images.logoCe } 
			/>
		</View>
	</View>
  )
}

import { View } from 'react-native';
import React from 'react';
import DisplayImages from '../Components/DisplayImages';
import CustomImput from '../Components/CustomImput';
import CustomButton from '../Components/CustomButton';
import Navigation from '../navigation/Navigation';

export default function Login() {
  return (
    <View>
      <DisplayImages/>
      <CustomImput/>
      <CustomButton text='Iniciar' tipo='PRIMARY' onPress={() => Navigation}/>
      <CustomButton text='Olvidó su Contraseña ?' tipo='INFO' onPress={Navigation}/>
      <CustomButton text='No tiene una cuenta?, registrese aquí' tipo='INFO' onPress={Navigation}/>
    </View>
  )
}





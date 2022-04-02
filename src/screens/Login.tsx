import { View } from 'react-native';
import React from 'react';
import DisplayImages from '../Components/DisplayImages';
import CustomImput from '../Components/CustomImput';
import CustomButton from '../Components/CustomButton';

export default function Login() {
  return (
    <View>
      <DisplayImages/>
      <CustomImput/>
      <CustomButton text='Iniciar Sesion' tipo='PRIMARY'/>
      <CustomButton text='Olvidó su Contraseña ?' tipo='INFO'/>
      <CustomButton text='No tiene una cuenta?, registrese aquí' tipo='INFO'/>
    </View>
  )
}


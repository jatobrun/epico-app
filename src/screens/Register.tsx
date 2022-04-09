import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomImput from '../Components/CustomImput';
import CustomButton from '../Components/CustomButton';

export default function Register() {
  return (
    <View>
      <View style={styles.root}>
        <Text style={styles.titulo}>Crear una cuenta</Text>
      </View>
      <CustomImput/>
      <CustomButton text='Registrarse' tipo='PRIMARY'/>
      <CustomButton text='Retornar' tipo='SECONDARY'/>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
  },
  titulo: {
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4C17BF',
    paddingVertical: 20,
  },
});


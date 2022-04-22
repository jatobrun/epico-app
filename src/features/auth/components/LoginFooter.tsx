import React from 'react'
import { View, Text } from 'react-native';
import { colors } from '../../../theme/colors';

const date : Date = new Date();

export const LoginFooter = () => {
  return (
    <View>
      <Text style={{
        fontSize: 14, 
        textAlign: 'center',
        marginBottom: 15,
        color: colors.grey1,
        textTransform: 'uppercase'
      }}>
        Todos los derechos reservados ® { date.getFullYear() } ÉPICO
      </Text>
    </View>
  )
}
import React from 'react'
import { View, Text } from 'react-native';
import { colors } from '../theme/colors';

export const Copyright = () => {
  return (
    <View>
        <Text style={{ 
            fontSize: 14, 
            textAlign: 'center',
            marginBottom: 15,
            color: colors.grey2 
        }}>
            Todos los derechos reservados ® 2022 ÉPICO
        </Text>
    </View>
  )
}

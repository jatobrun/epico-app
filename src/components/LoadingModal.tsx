import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { colors } from '../theme/colors'
import { Separator } from './Separator';

export const LoadingModal = () => {
  return (
    <View style={ styles.modal }>
        <ActivityIndicator size={ 'large' } color={ colors.primary } />
        <Separator />
        <Text style={ styles.text }>Cargando</Text>
	</View>
  )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,.6)',
        ...StyleSheet.absoluteFillObject
    },
    text: { 
        fontSize: 18,
    }
})
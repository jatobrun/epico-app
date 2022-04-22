import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../../theme/colors';

export const Welcome = () => {
  return (
    <View style={ styles.mainBox }>
        <Text style={ styles.headingTitle }>Hola de nuevo,</Text>
        <Text style={ styles.headingSubTitle }>Santiago</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainBox: {
        backgroundColor: colors.secondary,
        margin: 16,
        padding: 16,
        borderRadius: 8
    },
    headingTitle: {
        fontSize: 24,
        fontWeight: '400'
    },
    headingSubTitle: {
        fontSize: 32,
        fontWeight: '700'
    }
})
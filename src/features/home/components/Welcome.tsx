import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../store';
import { colors } from '../../../theme/colors';

export const Welcome = () => {
    const { user } = useSelector( (store:AppStore) => store.auth )
  return (
    <View style={ styles.mainBox }>
        <Text style={ styles.headingTitle }>Hola de nuevo,</Text>
        <Text style={ styles.headingSubTitle }>{ user?.nombre }</Text>
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
        fontSize: 22,
        fontWeight: '400'
    },
    headingSubTitle: {
        fontSize: 28,
        fontWeight: '700'
    }
})
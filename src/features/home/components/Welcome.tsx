import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../store';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Welcome = () => {
    const { user } = useSelector( (store:AppStore) => store.auth )
  return (
    <View style={ styles.mainBox }>
        <Text style={ styles.headingTitle }>Hola de nuevo, <Maticon name="emoticon-happy-outline" size={24} color='#1A1A1A' /></Text>
        <Text style={ styles.headingSubTitle }>{ user?.nombre }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainBox: {
        backgroundColor: '#C8E6C9',
        margin: 16,
        padding: 16,
        borderRadius: 8
    },
    headingTitle: {
        fontSize: 16,
        fontWeight: '400'
    },
    headingSubTitle: {
        fontSize: 28,
        fontWeight: '700'
    }
})
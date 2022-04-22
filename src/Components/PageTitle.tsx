import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { SeparatorTagline } from './SeparatorTagline'

interface Props {
    title: string
}

export const PageTitle = ( { title }: Props ) => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.heading }>{ title }</Text>
        <SeparatorTagline />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 0
    },
    heading: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '400'
    }
})
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'

export const SeparatorTagline = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.line }></View>
        <Image style={ styles.tag } source={ require('../assets/images/tag-icon.png')} />
        <View style={ styles.line }></View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: 30,
        marginVertical: 15,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: "#C4C4C4"
    },
    tag: {
        width: 40,
        resizeMode: 'contain',
    }
})
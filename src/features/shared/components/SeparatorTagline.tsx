import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { images } from '../../../assets/media'
import { colors } from '../../../theme/colors'


export const SeparatorTagline = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.line }></View>
        <Image style={ styles.tag } source={ images.tagIcon } />
        <View style={ styles.line }></View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: 30,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: colors.grey2
    },
    tag: {
        width: 40,
        resizeMode: 'contain',
    }
})
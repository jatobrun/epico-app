import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { colors } from '../../../theme/colors'

interface Props {
    business : any
}

export const Business = ( props: Props ) => {
    const { business } = props;
    return (
        <View style={ styles.mainBox }>
            <Text style={ styles.headingTitle }>Emprendimiento:</Text>
            <Text style={ styles.headingSubTitle }>{ business?.nombre_emprendimiento }</Text>
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
        fontSize: 16,
        fontWeight: '400'
    },
    headingSubTitle: {
        fontSize: 28,
        fontWeight: '700'
    }
})

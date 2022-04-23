import React from 'react'
import { Image, ImageBackground, ImageBackgroundProps, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { images } from '../../../assets/media'
import { Separator } from '../../../components/Separator'

export const LoadingScreen = () => {
  return (
    <View style={{
        flex: 1,
    }}>
        <ImageBackground 
            source={ images.backgroundLoading }
            style={{
                ...styles.alignCenter,
                flex: 1,
                width: '100%',
                justifyContent: "space-around"
            }}
            resizeMode="cover"
        >
            <View style={{ ...styles.alignCenter }}>
            <Image
                style={{
                    width: 240,
                    height: 75,
                    resizeMode: 'contain',
                }}
                source={ images.logoEpicoWhite } />
                <Separator />
                <Text style={{ ...styles.heading }}>Empresa Pública Municipal para la Gestión</Text>
                <Text style={{ ...styles.heading, fontWeight: '700'  }}>de la Innovación y la Competitividad, EP.</Text>
            </View>
            <View style={{ ...styles.alignCenter }}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Separator />
                <Text style={{ ...styles.heading, fontSize: 16, fontWeight: '700' }}>Cargando espere un momento</Text>
            </View>
            <Image
                style={{
                    width: 240,
                    height: 75,
                    resizeMode: 'contain',
                }}
                source={ images.logoAlcaldiaWhite } />
        </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    heading : {
        fontSize: 18,
        color: 'white',
        fontWeight: '400'
    },
    alignCenter : {
        alignItems: 'center'
    }
})
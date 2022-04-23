import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { images } from '../../../assets/media';
import { colors } from '../../../theme/colors';

export const CardEntrepreneur = ( props : any ) => {
  const { person } = props

  const  ImageRestApi = 'https://epico.gob.ec/archivos/foto_perfil_2787.png'
  return (
    <TouchableOpacity style={ styles.card }>
      <View style={{ 
        width: 60,
        height: 60,
        backgroundColor: 'grey',
        marginRight: 16
      }}>
        <Image
          style={ styles.avatar } 
          source={{ uri : ImageRestApi }}
        />
      </View>
      <View>
        <Text style={ styles.entrepreneurName }>{ person.apellido } { person.nombre }</Text>
        <Text>{ person.frase_perfil }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: colors.grey2,
    borderBottomWidth: 1
  },
  avatar: { 
    flex: 1,
    width: 60,
    height: 60,
  },
  entrepreneurName: {
    fontSize: 18,
    fontWeight: '500'
  }
})

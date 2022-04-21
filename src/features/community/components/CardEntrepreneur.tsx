import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { images } from '../../../assets/media';
import { colors } from '../../../theme/colors';

export const CardEntrepreneur = () => {
  return (
    <TouchableOpacity style={ styles.card }>
      <Image
        style={ styles.avatar } 
        source={ images.avatarDefault }
      />
      <View>
        <Text style={ styles.entrepreneurName }>Santiago Amador Mora Merchán</Text>
        <Text>santiagomora.com</Text>
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
    width: 60,
    height: 60,
    margin: 0,
    resizeMode: 'contain',
    marginRight: 16,
  },
  entrepreneurName: {
    fontSize: 18,
    fontWeight: '500'
  }
})

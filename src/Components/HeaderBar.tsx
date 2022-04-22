import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

export const HeaderBar = () => {
  return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button onPress={() => { console.log('ready press') }}>Botton</Button>
      </View>
  )
}

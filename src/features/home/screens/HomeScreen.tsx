import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends DrawerScreenProps<any, any>{};

export const HomeScreen = ( { navigation } : Props ) => {
  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}

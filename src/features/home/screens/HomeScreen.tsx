import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Welcome } from '../components/Welcome';
import { PageTitle } from '../../../components/PageTitle';

interface Props extends DrawerScreenProps<any, any>{};

export const HomeScreen = ( { navigation } : Props ) => {
  return (
    <View>
      <PageTitle title="Inicio"/>
      <Welcome />
      <Text>Home Screen</Text>
    </View>
  )
}

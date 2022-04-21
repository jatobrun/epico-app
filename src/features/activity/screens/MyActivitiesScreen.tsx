import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { PageTitle } from '../../../components/PageTitle';

export const MyActivitiesScreen = () => {
  return (
    <View>
      <PageTitle title="Mis actividades" />
      <Text>My Activities Screen</Text>
    </View>
  )
}

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Welcome } from '../components/Welcome';
import { PageTitle } from '../../../components/PageTitle';
import { Business } from '../components/Business';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../store';

interface Props extends DrawerScreenProps<any, any>{};

export const HomeScreen = ( { navigation } : Props ) => {
    const { user } = useSelector( (store:AppStore) => store.auth )
    return (
      <View>
        <PageTitle title="Inicio"/>
        <Welcome />
        { ( user?.inscripciones?.length ) && <PageTitle title="Mis emprendimientos"/> }
        { user?.inscripciones.map( ( item , key ) => <Business key={ key } business={ item } /> ) }
      </View>
    )
}

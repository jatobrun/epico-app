import React from 'react'
import { Image, View } from 'react-native';
import { Separator } from '../../components/Separator';
import { colors } from '../../theme/colors';
import { images } from '../../assets/media';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store';

export const SideNavHeader = () => {
	const { user } = useSelector( (store: AppStore) => store.auth );
  return (
    <View style={{
        alignItems: 'center'
      }}>
      
      <Image 
          style={{ 
            width: 220,
            height: 75,
            margin: 0,
            resizeMode: 'contain',
          }} 
          source={ images.logoCe } 
        />
        <Separator />
        <View style={{ 
          borderWidth: 4,
          borderColor: colors.primary,
        }}>
          <Image
            style={{ 
              width: 80,
              height: 80,
              margin: 0,
              resizeMode: 'contain',
            }} 
            source={ images.avatarDefault }
          />
        </View>
        <Separator />
        <Text style={{
          fontSize: 20,
          fontWeight: '700'
        }}>{ user?.nombre }</Text>
        <Text style={{
          fontSize: 18,
          fontWeight: '700'
        }}>{ user?.apellido }</Text>
        <Text style={{
          fontSize: 14,
          fontWeight: '400'
        }}>{ user?.correo }</Text>
    </View>
  )
}

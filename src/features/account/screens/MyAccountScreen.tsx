import React from 'react'
import { Image, View } from 'react-native'
import { images } from '../../../assets/media';
import { PageTitle } from '../../../components/PageTitle';
import { Separator } from '../../../components/Separator';
import { colors } from '../../../theme/colors';
import { FormUser } from '../components/FormUser';

export const MyAccountScreen = () => {
  return (
    <View>
      <PageTitle title="Mi cuenta" />
      <View style={{
          alignItems: 'center',
        }}>
          <Separator />
          <View style={{ 
            borderWidth: 4,
            borderColor: colors.primary,
          }}>
            <Image
              style={{ 
                width: 160,
                height: 160,
                margin: 0,
                resizeMode: 'contain',
              }} 
              source={ images.avatarDefault }
            />
          </View>
      </View>
      <Separator />
      <FormUser />
    </View>
  )
}

import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicon from 'react-native-vector-icons/Octicons';
import { Button, Text } from 'react-native-paper';
import { 
  createDrawerNavigator, 
  DrawerContentComponentProps, 
  DrawerContentScrollView, 
  DrawerNavigationOptions, 
} from '@react-navigation/drawer';
import { TabsNav } from './TabsNav';
import { MyAccountScreen } from '../../features/account/screens/MyAccountScreen';
import { colors } from '../../theme/colors';
import media, { images } from '../../assets/media';
import { Separator } from '../../components/Separator';

const Drawer = createDrawerNavigator();


export const SideNav = () => {
  
  return (
    <Drawer.Navigator
      screenOptions={ _screenOptions }
      drawerContent={ (props) => <SideContent {...props} /> }
    >
      <Drawer.Screen name="Tabs" component={ TabsNav } />
      <Drawer.Screen name="Profile" component={ MyAccountScreen } />
    </Drawer.Navigator>
  )
}

const _screenOptions : DrawerNavigationOptions = {
  headerStyle: {
      backgroundColor: colors.primary,
  },
  headerTitleStyle: {
    color: 'white'
  },
  headerTitle: 'ÉPICO',
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerRight: () => {
    return(
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity
          style={ styles.buttonHeader }
          onPress={() => {}}
        >
          <Octicon name="bell" size={28} color={ '#FFF' } />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.buttonHeader }
          onPress={() => {}}
        >
          <Octicon name="comment" size={28} color={ '#FFF' } />
        </TouchableOpacity>
      </View>
    )
  }
}

const SideContent = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <Separator />
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
          fontSize: 18,
          fontWeight: 'bold'
        }}>Santiago Mora</Text>
      </View>
      <Separator />
      <View>
        <TouchableOpacity style={ styles.listItemButton }
          onPress={ () => navigation.navigate( 'Tabs' ) }
        >
          <Maticon name="home" size={28} color={ colors.textBlack } />
          <Text style={ styles.listItemText }>Mi inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.listItemButton }
          onPress={ () => navigation.navigate( 'Profile' ) }
        >
          <Maticon name="account-circle" size={28} color={ colors.textBlack } />
          <Text style={ styles.listItemText }>Mi cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.listItemButton }>
          <Maticon name="logout" size={28} color={ colors.textBlack } />
          <Text style={ styles.listItemText }>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  logoHeader: {
    height: 50,
    width: 110
  },
  listItemButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  listItemText: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    color: colors.textBlack
  },
  buttonHeader: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
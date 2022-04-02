import { View, Text } from 'react-native'
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react'
import { Button, DatePicker, Icon, Modal,WhiteSpace, WingBlank } from '@ant-design/react-native';

export default function Tickets() {
   let iconName = 'InfoCircleTwoTone';
  return (
   
   
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <WingBlank>
      
      <Maticon name={iconName} size={48} color='#FFF' />
        <Text>Cita creada exitosamente</Text>
        <Text>AgrÃ©galo a tu calendario</Text>
  
      <WingBlank
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
    
        <Button type="ghost">Google Calendar</Button>
       
        <Button type="ghost" >
          Exportar .Cal
        </Button>
      
        
      </WingBlank>
      <WhiteSpace />
      <Button type="primary">Entendido</Button>
        <WhiteSpace />
    </WingBlank>
    </View>
  
  )
}
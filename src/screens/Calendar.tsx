import { View, Text } from 'react-native'
import React from 'react';
import { Button, DatePicker, Icon, Modal,Provider } from '@ant-design/react-native';

export default function Calendar() {

 
  return (


   <Provider>
    <View >
    
   
    
  <Text>Calendario</Text>
  <DatePicker 
              mode="date"
              defaultDate={new Date()}
              minDate={new Date(2015, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
            
              format="YYYY-MM-DD"/>
   


   

</View>

</Provider>  

  )
}
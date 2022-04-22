import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TicketsScreen = () => {
  return (
    <View>Tickets</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  input: {
    height: 40,
    margin: 12,
 
    padding: 10,
  },
  head: { height: 50, backgroundColor: '##4680ff' },
  text: { marginLeft: 5 },
  row: { height: 50 },
  button:{
    alignSelf:'center',
    borderRadius:20,
    paddingVertical:10,
    marginVertical:10,
    marginTop:10,
    width:'80%',
    marginBottom:10
    
  }
});

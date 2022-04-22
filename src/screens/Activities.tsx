import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { SeparatorTagline } from '../Components/SeparatorTagline';

//import { styles } from '../theme'

export default function Activities() {
  return (
    <View style={ styles.container }>
      <SeparatorTagline />
      <View style={styles.button}>
        <Text style={styles.text}>Bienvenida</Text>
        <Button title="Empezar"></Button>
      </View>

      <View style={styles.button}>
        <Text style={styles.text}>Tour ÉPICO (opcional)</Text>
        <Button title="En proceso"></Button>
      </View>

      <View style={styles.button}>
        <Text style={styles.text}>Actividades del Programa Introductorio</Text>
        <Button title="En proceso"></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: { fontSize: 15 },
  button:{
    borderRadius:30,
    width:'70%',
    paddingBottom: 50
  },
});
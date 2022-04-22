import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { PageTitle } from '../../shared/components/PageTitle';

export const MyActivitiesScreen = () => {
  return (
    <>
      <PageTitle title="Mis actividades" />
      <View style={ styles.container }>
        <View style={styles.button}>
          <Text style={styles.text}>Bienvenida</Text>
          <Button mode="contained" onPress={() => {}}>Empezar</Button>
        </View>

        <View style={styles.button}>
          <Text style={styles.text}>Tour ÉPICO (opcional)</Text>
          <Button mode="contained" onPress={() => {}} >En proceso</Button>
        </View>

        <View style={styles.button}>
          <Text style={styles.text}>Actividades del Programa Introductorio</Text>
          <Button mode="contained" onPress={() => {}}>En proceso</Button>
        </View>
      </View>
    </>
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
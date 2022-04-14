import React, { useState } from "react";
import { Button, StyleSheet, View,Text,TextInput} from "react-native";
import Dialog from "react-native-dialog";
import {Picker} from '@react-native-picker/picker';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


export default function Ticket() {
  const [visible, setVisible] = useState(false);
  const[visibletable,setvisibleTable]=useState(false);
  const [selectedValue, setSelectedValue] = useState("soporte");

  const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];
  

  const showDialog = () => {
    setVisible(true);
  };

  const showTable=()=>{
    setvisibleTable(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCancelTable = () => {
    setvisibleTable(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (

    
    <View style={styles.container}>
      <View style={styles.button}>
      <Button title="Crear Ticket" onPress={showDialog} />
     </View>
     <View style={styles.button}>
      <Button title="Ver Tickets" onPress={showTable} />
      </View>
      <Dialog.Container visible={visible}>
         <Text>Tipo Ticket</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
       
        <Picker.Item label="Soporte Tecnico" value="soporte" />
        <Picker.Item label="Notificacion" value="notificacion" />
      </Picker>
      <Text>Categoria</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
       
        <Picker.Item label="Reagendamiento" value="reagendamiento" />
        <Picker.Item label="Cancelar Agenda" value="cancelar" />
      </Picker>

      <Text>SubCategoria</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
       
        <Picker.Item label="Calamidad Domestica" value="caladom" />
        <Picker.Item label="Calamidad Familiar" value="calafam" />
      </Picker>
      <Text>Descripcion</Text>
      <TextInput
     style={styles.input}
      />
    
        
        <Dialog.Button label="Crear Ticket" onPress={handleCancel} />
        
      </Dialog.Container>

      <Dialog.Container visible={visibletable}>
      <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
        </Table>
         <Dialog.Button label="Salir" onPress={handleCancelTable} />
      </Dialog.Container>
    </View>
  );
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
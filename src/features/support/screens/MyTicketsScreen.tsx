import React,{useState }from 'react';
import { StyleSheet, View,TextInput} from "react-native";
import Dialog from "react-native-dialog";
import {Picker} from '@react-native-picker/picker';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { PageTitle } from '../../../components/PageTitle';
import { Button, Text } from 'react-native-paper';



export const MyTicketsScreen = () => {
  
  const [visible, setVisible] = useState(false);
  const[visibletable,setvisibleTable]=useState(false);
  const [selectedValue, setSelectedValue] = useState("soporte");

  const tableHead = ['Tipo Ticket', 'Categoria', 'Subcategoria', 'Descripcion'];
    const tableData = [
      ['Soporte Tecnico', 'Eventos', 'Trabajo', 'Requiero soporte'],
      ['Notificacion', 'Formularios', 'Estudios', 'Ayuda con formulario'],
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
<>
    <PageTitle title="Tickets" />
    <View style={styles.container}>
      <View style={styles.button}>
      <Button  mode="contained" onPress={showDialog} >Crear Ticket</Button>
     </View>
     <View style={styles.button}>
      <Button  mode="contained" onPress={showTable} >Ver Tickets</Button>
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
        style={{ height: 100, width: 210 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
       
        <Picker.Item label="Reagendamiento" value="reagendamiento" />
        <Picker.Item label="Cancelar Agenda" value="cancelar" />
        <Picker.Item label="Reservar Espacio" value="reservar" />
        <Picker.Item label="Eventos" value="evento" />
        <Picker.Item label="Formularios" value="formulario" />
        <Picker.Item label="Atrevete" value="atrevete" />
        <Picker.Item label="Red de emprendedores" value="red" />
        <Picker.Item label="Sugerencias" value="sugerencia" />
        <Picker.Item label="Notificacion" value="notificacion" />
        <Picker.Item label="Asistencia Tecnica" value="asistencia" />
      </Picker>

      <Text>SubCategoria</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 240 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
       
        <Picker.Item label="Calamidad Domestica" value="caladom" />
        <Picker.Item label="Calamidad Familiar" value="calafam" />
        <Picker.Item label="Tramite Externo" value="tramite" />
        <Picker.Item label="Trabajo" value="trabajo" />
        <Picker.Item label="Estudios" value="estudio" />
        <Picker.Item label="Otro" value="otro" />
      </Picker>
      <Text>Descripcion</Text>
      <TextInput
     style={styles.input}
      />
    
        
        <Dialog.Button label="Crear Ticket" onPress={handleCancel} />
        
      </Dialog.Container>

      <Dialog.Container visible={visibletable}>
      <Table>
          <Row data={tableHead} style={styles.head}/>
          <Rows data={tableData} style={styles.row} />
        </Table>
         <Dialog.Button label="Salir" onPress={handleCancelTable} />
      </Dialog.Container>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   alignitems:'center',
   
  },
  input: {
    height: 40,
    margin: 12,
 
    padding: 10,
  },
  head: { height: 60, backgroundColor: '##4680ff',width:350 },
  text: { marginLeft: 5 },
  row: { height: 50,width:350 },
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

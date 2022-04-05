import { View, Text,Alert,Modal,StyleSheet,Pressable } from 'react-native'
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';

import React ,{ useState } from 'react';
import { Button, DatePicker, Icon,WhiteSpace, WingBlank } from '@ant-design/react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Tickets() {
   let iconName = 'InfoCircleTwoTone';
   const [modalVisible, setModalVisible] = useState(false);
   const [text,onChangeText]=React.useState("Texto aqui");
  return (
   
   
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
       
      
      
      <Maticon name={iconName} size={48} color='#FFF' />
        <Text>Cita creada exitosamente</Text>
        <Text>AgrÃ©galo a tu calendario</Text>
        
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
          <Text style={styles.textStyle}>Entendido</Text>

          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}
    >
     
      <Text style={styles.textStyle}>Crear Ticket</Text>
      
    </Pressable>
    <Pressable
     style={[styles.button, styles.buttonOpen]}
     onPress={() => setModalVisible(true)}>
      <Text style={styles.textStyle}>Ver Tickets</Text>
    </Pressable>
  </View>
);
};

const styles = StyleSheet.create({

 
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},

input: {
  height:40,
  margin:12,
  borderWidth:1,
  padding:10

},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  marginBottom:10
},
buttonOpen: {
  backgroundColor: "#4680ff",
},
buttonClose: {
  backgroundColor: "#4680ff",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  fontSize:25

},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}
  
});
import { View, Text, StyleSheet,FlatList} from 'react-native'
import React, { useState } from 'react'
import { Searchbar,Button } from 'react-native-paper'
import { Flex } from '@ant-design/react-native';
import { mdiMargin } from '@mdi/js';

export default function Entrepreneurs() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visible, setVisible] = useState(false);
  const data = [
    { id: '1', title: 'First item' },
    { id: '2', title: 'Second item' },
    { id: '3', title: 'Third item' },
    { id: '4', title: 'Fourth item' },
    { id: '5', title: 'Five item' },
    { id: '6', title: 'Six item' },
    { id: '7', title: 'Seven item' },
    { id: '8', title: 'Eight item' },
  
   
  ];

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const showDialog = () => {
    setVisible(true);
  };
  return (
    <View style={styles.container}>
       
    <View style={styles.buscador}>
      
      <View style={styles.box}>
        <View style={styles.texto}>
         <Text >Red de Emprendedores</Text>
         </View>
      <Searchbar
       
         placeholder="Buscar por propietario,negocio,dirección."
         onChangeText={onChangeSearch}
         value={searchQuery}
         />
         

         
        
        </View>
        <View style={styles.box2}>
        <Button
          icon="filter"
          onPress={showDialog} 
         >
        </Button>
        </View>
    
    </View>
   
        <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.title}</Text>
          </View>
          
        )}
      />
      </View>
   
  );
}
  const styles = StyleSheet.create({
    container: {
     flex:1,
    
    },
    buscador:{
      marginLeft:20,
      flex: 1,
      flexDirection: 'row',
     
      
     
    },

    texto:{
marginBottom:10,
    },
    box: {
      flex: 1,
      height: 50,
      marginTop:10,
     
    },
    box2:{

      marginTop:40,
    

    },
    listItem: {
      marginTop: 10,
      padding: 15,
      
      backgroundColor: '#fff',
      width: '100%'
    },
    listItemText: {
      fontSize: 18
    },
   

  });

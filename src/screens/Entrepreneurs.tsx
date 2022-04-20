import { View, Text, StyleSheet,FlatList} from 'react-native'
import React, { useState } from 'react'
import { Searchbar,Button } from 'react-native-paper'
import { Flex } from '@ant-design/react-native';

export default function Entrepreneurs() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [visible, setVisible] = useState(false);
  const data = [
    { id: '1', title: 'First item' },
    { id: '2', title: 'Second item' },
    { id: '3', title: 'Third item' },
    { id: '4', title: 'Fourth item' }
  ];

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const showDialog = () => {
    setVisible(true);
  };
  return (
    <View style={styles.container}>
        <Text>Red de Emprendedores</Text>
    <View style={styles.buscador}>
      <View style={styles.box}>
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
      flex: 1,
      flexDirection: 'row',
     
      marginBottom: 10
     
    },
    box: {
      flex: 1,
      height: 100,
     
    },
    box2:{
    

    },
    listItem: {
      marginTop: 20,
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%'
    },
    listItemText: {
      fontSize: 18
    }
    
  });

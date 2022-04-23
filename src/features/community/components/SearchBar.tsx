import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export const SearchBar = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        dense={ true }
        label="Búsqueda"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
  )
}

import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const CustomImput = () => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={user}
        onChangeText={setUser}
        style={styles.input}
        placeholder="Usuario"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal:20,
  },
  input: {
    backgroundColor:'white',
    width: '100%',
    height: 45,
    fontSize: 18,
    borderColor: '#e8e8e8',
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5,
  },
});

export default CustomImput;
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 79
  },
  logo1: {
    width: '70%',
    height: 90,
  },
  logo2: {
    width: '80%',
    height: 64,
  },
});

const DisplayImages = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo1}
        resizeMode='cover'
        source={require('../assets/images/epico_logo.png')}
      />
      <Image
        style={styles.logo2}
        resizeMode= 'cover'
        source={require('../assets/images/epico_logo2.png')}
      />
    </View>
  );
}

export default DisplayImages;
import React, { Key } from 'react';
import { View,Text, StyleSheet, Pressable} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';

type ItemsProp ={
    text: string;
    tipo: "PRIMARY" | "INFO" | "SECONDARY";
    onPress(): void
}

const onPressed = () => {
    console.warn(`Se ha presionado el boton ...`);
}

const CustomButton = ({text,tipo,onPress}:ItemsProp) => {
    return(
        <Pressable 
            style={styles.container} 
            onPress={onPressed}>
            <Text style={[styles.button, styles[`button_${tipo}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {       
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        height: 45,
        width: '100%',
        fontSize: 18,
        marginVertical: 5,
        borderRadius: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        
    },
    button_PRIMARY:{
        backgroundColor: '#4C17BF',
        color: 'white',
    },
    button_SECONDARY:{
        borderColor: '#B4ACAB',
        backgroundColor:'#E4E0DF',
        borderWidth: 1,
        color: 'black',
    },
    button_INFO:{
        color: 'black',
    }
})

export default CustomButton;
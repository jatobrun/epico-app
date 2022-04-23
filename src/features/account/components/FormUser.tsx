import React from 'react'
import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { Separator } from '../../../components/Separator'
import { AppStore } from '../../../store'

export const FormUser = () => {
	const { user } = useSelector( (store: AppStore) => store.auth );
    return (
        <View style={{ paddingHorizontal: 15 }}>
        <TextInput
            label="Nombres"
            placeholder="Ingrese su nombre"
            value={ user?.nombre }
            autoCapitalize="none"
            autoCorrect={ false }
        />
        <Separator />
        <TextInput
            label="Apellidos"
            placeholder="Ingrese su apellido"
            value={ user?.apellido }
            autoCapitalize="none"
            autoCorrect={ false }
        />
        <Separator />
        <TextInput
            label="Correo"
            placeholder="Ingrese su correo"
            value={ user?.correo }
            autoCapitalize="none"
            autoCorrect={ false }
        />
        <Separator />
        <Button 
            mode="contained" 
            uppercase={ false }
            onPress={ () => '' }>
            Guardar datos
        </Button>
        </View>
    )
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuthParams , setNotAuthenticated } from ".";
import EpicoApi from "../../../api/epicoApi";
import { LoginResponse } from "../../../interfaces/authInterfaces";

const doLogin = ( correo : string , password : string ) => {
    return async ( dispatch : any ) : Promise<LoginResponse> => {
        const formData = new FormData();
        formData.append('usuario' , correo )
        formData.append('password' , password )
        const { data } = await EpicoApi.post<LoginResponse>('/login/', formData );
        if ( data.codigo === '1' ) {
            await AsyncStorage.setItem('token', data.token );
            dispatch( setAuthParams({
                user : data.data,
                token: data.token,
                codigo: data.codigo,
                status: 'authenticated'
            }))
        }
        if ( data.codigo === '0' ) {
            dispatch( setNotAuthenticated() );
        }
        return data
    }
}

const logout = async()  => {
    return async ( dispatch : any ) => {
        await AsyncStorage.removeItem('token');
        dispatch( setNotAuthenticated() );
    }
}

const checkToken = async( ) => {
    return async ( dispatch: any ) => {
        const token = await AsyncStorage.getItem('token');
        // No token, no autenticado
        if ( !token ) return dispatch( setNotAuthenticated() );
    }
        

}

export  {
    doLogin,
    logout,
    checkToken
}
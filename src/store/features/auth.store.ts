import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import EpicoApi from '../../api/epicoApi';
import { LoginResponse, Usuario } from '../../features/auth/interfaces/LoginResponse';

export type AuthState = {
    user: Usuario | null,
    token: string | null,
    codigo: string | null,
    status: 'checking' | 'authenticated' | 'not-authenticated';
}

export type ActionParams = {
    type: string;
    payload: { 
        token: string,
        user: Usuario,
        codigo: string,
        status: 'checking' | 'authenticated' | 'not-authenticated';
    };
}
export const AuthEmptyState: AuthState = {
    user: null,
    token: null,
    codigo: null,
    status: 'checking'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: AuthEmptyState,
    reducers: {
        setAuthParams: ( state , action : ActionParams ) => {
            return {
                ...state,
                ...action.payload
            }
        },
        setNotAuthenticated : ( state ) => {
            return {
                ...AuthEmptyState,
                status: 'not-authenticated'
            }
        },
        fakePass : ( state, action : any ) => {
            return {
                ...state,
                ...action.payload
            }
        },
        setToken: ( state , action: any ) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { 
    setAuthParams,
    setNotAuthenticated,
    fakePass
} = authSlice.actions

export default authSlice.reducer;



export const checkToken = () => {
    return async( dispatch: any ) => {
        const token = await AsyncStorage.getItem('token');
        if ( !token ) return dispatch( setNotAuthenticated() );
        // TODO: Revisar validacion del storage que devuelvo un string vacio.
        const storageUser : any = await AsyncStorage.getItem('usuario');
        const codigo : any = await AsyncStorage.getItem('codigo');
        const usuario : Usuario = JSON.parse( storageUser )
        dispatch( setAuthParams({
            user : usuario,
            token: token,
            codigo: codigo,
            status: 'authenticated'
        }))
    }
}
export const doLogin = ( correo : string , password : string ) => {
    return async( dispatch : any ) : Promise<LoginResponse> => {
        const formData = new FormData();
        formData.append('usuario' , correo )
        formData.append('password' , password )
        const response = await EpicoApi.post<LoginResponse>('/login/', formData );
        const { codigo, data, mensaje, token  } = response.data
        if ( codigo === '1' ) {
            await AsyncStorage.setItem('token', token );
            await AsyncStorage.setItem('codigo', codigo );
            await AsyncStorage.setItem('usuario', JSON.stringify( data ) );
            dispatch( setAuthParams({
                user : data,
                token: token,
                codigo: codigo,
                status: 'authenticated'
            }))
        }
        if ( codigo === '0' ) {
            dispatch( setNotAuthenticated() );
        }
        return response.data
    }
}

export const doLogout = () => {
    return async( dispatch : any ) => {
        await AsyncStorage.removeItem('token');
        dispatch( setNotAuthenticated() );
    }
}

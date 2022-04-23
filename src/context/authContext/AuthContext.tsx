import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import epicoApi from '../../api/epicoApi';

import { Usuario, LoginResponse, LoginData  } from '../../features/auth/interfaces/loginResponse';
import { authReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    isLoading: boolean;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    isLoad: ( loading : boolean ) => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    isLoading: false,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        
        // No token, no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
        const resp = await epicoApi.get('/auth');
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
        
        await AsyncStorage.setItem('token', resp.data.token );
    }


    const signIn = async({ correo, password }: LoginData ) => {

        try {
            dispatch({ 
                type: 'isLoad' , 
                payload: { loading: true }
            })
            const formData = new FormData();
            
            formData.append('usuario' , correo )
            formData.append('password' , password )
            const { data } = await epicoApi.post<LoginResponse>('/login/', formData );
            console.log( data )
            if ( data.codigo === '1' ) {
                await AsyncStorage.setItem('token', data.token );
                dispatch({ 
                    type: 'signUp',
                    payload: {
                        token: data.token,
                        user: data.usuario
                    }
                });
            } else {
                dispatch({ 
                    type: 'addError', 
                    payload: 'Información incorrecta'
                })
            }
            dispatch({ 
                type: 'isLoad' , 
                payload: { loading: false }
            })

        } catch (error: any) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
    };
    
    const isLoad = ( loading : boolean ) => {
        dispatch({ type: 'isLoad' , payload: { loading: loading } });
    };
    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            isLoad,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}



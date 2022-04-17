import { createSlice } from '@reduxjs/toolkit';

import { LoginResponse, Usuario } from '../../../interfaces/authInterfaces';

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

const initialState : AuthState = {
    user: null,
    token: null,
    codigo: null,
    status: 'checking'
}

export const authSlice  = createSlice({
    name: 'Auth',
    initialState : initialState,
    reducers: {
        setAuthParams: ( state , action : ActionParams ) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.codigo = action.payload.codigo;
            state.status = action.payload.status;
        },
        setNotAuthenticated : ( state ) => {
            state.token = null
            state.user = null
            state.codigo = null
            state.status = 'not-authenticated'
        }
    }
});

export const { 
    setAuthParams,
    setNotAuthenticated
} = authSlice.actions

export default authSlice.reducer;
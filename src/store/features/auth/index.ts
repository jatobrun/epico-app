import { createSlice } from '@reduxjs/toolkit';
import { Usuario } from '../../../features/auth/interfaces/LoginResponse';


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
            return {
                ...state,
                ...action.payload
            }
        },
        setNotAuthenticated : ( state ) => initialState
    }
});

export const { 
    setAuthParams,
    setNotAuthenticated
} = authSlice.actions

export default authSlice.reducer;
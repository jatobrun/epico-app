import { Usuario } from '../../features/auth/interfaces/loginResponse';

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    isLoading: boolean;
    user: Usuario | null;
}

type AuthAction = 
    | { type: 'signUp', payload: { token: string, user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }
    | { type: 'isLoad' , payload: { loading: boolean} }


export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload
            }
    
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            };

        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user
            }

        case 'isLoad':
            return {
                ...state,
                isLoading: action.payload.loading,
            }

        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null
            }

        default:
            return state;
    }


}



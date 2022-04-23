import { configureStore , combineReducers } from '@reduxjs/toolkit';
import { authSlice, AuthState } from './features/auth.store';
export interface AppStore {
    auth: AuthState;
}

const store = configureStore<AppStore>({
    reducer: {
        auth: authSlice.reducer
    }
})

export default store;
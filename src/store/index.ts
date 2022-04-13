import { configureStore , combineReducers } from '@reduxjs/toolkit';
import Auth from './features/auth';

const rootReducer = combineReducers({
    Auth
})

export type RootState = ReturnType<typeof rootReducer >;

const store = configureStore({
    reducer: rootReducer
})

export default store;
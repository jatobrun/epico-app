import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '../features/auth/screens/LoadingScreen';
import { AppStore } from '../store';
import { checkToken } from '../store/features/auth.store';
import { AuthNav } from './navigators/AuthNav';
import { SideNav } from './navigators/SideNav';

export const MainNav = () => {

	const authState = useSelector( (store: AppStore) => store.auth );

  const dispatch = useDispatch();

	useEffect(() => {
		dispatch( checkToken() )
	} , [] )
  
  // TODO: Revisar la logica para mostrar las pantallas probar con Navigate replace root 
  return (
      ( authState.status === 'checking' )
        ? <LoadingScreen />
        : ( authState.status === 'authenticated' )
          ? <SideNav />
          : <AuthNav />
  )
}

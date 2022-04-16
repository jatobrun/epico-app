import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

import { Provider as PaperProvider } from 'react-native-paper';
import ThemePaper from './src/theme/Theme';
import { AuthProvider } from './src/context/authContext/AuthContext';

import SplashScreen from 'react-native-splash-screen'

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

const App = () => {
useEffect(() => {
    SplashScreen.hide();
}, []);

  return (
    <PaperProvider theme={ThemePaper}>
      <NavigationContainer>
        <AppState>
          <Navigation />
        </AppState>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;
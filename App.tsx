import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';
import ThemePaper from './src/theme/Theme';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './src/store';
import { SideNav } from './src/navigation/navigators/SideNav';
import { MainNav } from './src/navigation/MainNav';
import { Navigation } from './src/navigation/Navigation';
import { AuthNav } from './src/navigation/navigators/AuthNav';

const App = () => {

  useEffect(() => {
      SplashScreen.hide();
  }, []);

  return (
      <PaperProvider theme={ThemePaper}>
        <Provider store={ store }>
            <NavigationContainer>
              <MainNav />
            </NavigationContainer>
        </Provider>
      </PaperProvider>
  )
}

export default App;
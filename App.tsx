import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

import { Provider as PaperProvider } from 'react-native-paper';
import ThemePaper from './src/theme/Theme';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
useEffect(() => {
    SplashScreen.hide();
}, []);

  return (
    <Provider store={ store }>
      <PaperProvider theme={ThemePaper}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}

export default App;
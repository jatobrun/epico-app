import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

import { Provider as PaperProvider } from 'react-native-paper';
import ThemePaper from './src/theme/Theme';

import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
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
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {store} from './src/redux/store';
import {HomeScreen} from './src/screens';
import {theme} from './src/theme/colors';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{flex: 1}}>
          <HomeScreen />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};
export default App;

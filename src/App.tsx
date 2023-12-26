import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

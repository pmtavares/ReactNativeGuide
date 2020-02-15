import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, ActivityIndicator,
  StatusBar,
} from 'react-native';

import MealsNavigator from './src/navigation/MealsNavigation';


const App =() =>  {
  return (
    <>
      <MealsNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ccc',
  },
  
});

export default App;

import React from 'react';
import { StyleSheet,  View,  Text,  StatusBar,} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import productReducer from './src/store/reducers/productsReducer';
import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

const App= () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

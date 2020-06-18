import React from 'react';
import {createStore, combineReducers} from 'redux';
import MealsNavigator from './src/navigation/MealsNavigation';
import mealsReducer from './src/store/reducers/meals';
import {Provider} from 'react-redux';


const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);

const App =() =>  {
  return (
    <>
      <Provider store={store}><MealsNavigator /></Provider> 
    </>
  );
};


export default App;

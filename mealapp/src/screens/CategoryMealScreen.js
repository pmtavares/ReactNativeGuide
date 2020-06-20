import React from 'react'
import {useSelector} from 'react-redux'
import {View, StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText';

import MealList from '../components/MealsList';


const CategoryMealScreen = props => {
   
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    
    const displayMeals = availableMeals.filter(meal => 
                meal.categoryIds.indexOf(catId) >=0)

     if(displayMeals.length === 0)
     {
             return <View style={styles.content}>
                        <DefaultText>No meals to display</DefaultText>
                     </View>
     }           
        return (
           <MealList listData={displayMeals} navigation={props.navigation}/>
        )
    
}

const styles = StyleSheet.create({
        content: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
        }
})



export default CategoryMealScreen;
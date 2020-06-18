import React from 'react'
import {useSelector} from 'react-redux'

import MealList from '../components/MealsList';


const CategoryMealScreen = props => {
   
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    
    const displayMeals = availableMeals.filter(meal => 
                meal.categoryIds.indexOf(catId) >=0)

        return (
           <MealList listData={displayMeals} navigation={props.navigation}/>
        )
    
}




export default CategoryMealScreen;
import React from 'react'

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealsList';


const CategoryMealScreen = props => {
   
    const catId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => 
                meal.categoryIds.indexOf(catId) >=0)

        return (
           <MealList listData={displayMeals} navigation={props.navigation}/>
        )
    
}




export default CategoryMealScreen;
import React from 'react'
import { MEALS} from '../data/dummy-data';
import MealsList from '../components/MealsList';


const FavoriteScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')        

        return (
            <MealsList listData={favMeals} navigation={props.navigation}/>

        )
    
};

FavoriteScreen.navigationOptions = (navigationData) =>{
    return {
        headerTitle: "Your favorites",

    }
};



export default FavoriteScreen;
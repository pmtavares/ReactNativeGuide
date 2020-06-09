import React from 'react'
import { MEALS} from '../data/dummy-data';
import MealsList from '../components/MealsList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { DrawerActions} from 'react-navigation-drawer';


const FavoriteScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')        

        return (
            <MealsList listData={favMeals} navigation={props.navigation}/>
        )
    
};

FavoriteScreen.navigationOptions = (props) =>{
    return {
        headerTitle: "Your favorites",
        headerLeft: () =>  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="menu" iconName="bars" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer()) }
                            />
                </HeaderButtons>
    }
};


export default FavoriteScreen;
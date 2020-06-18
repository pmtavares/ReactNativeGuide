import React from 'react'
import MealsList from '../components/MealsList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { DrawerActions} from 'react-navigation-drawer';
import {useSelector} from 'react-redux';


const FavoriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)   
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
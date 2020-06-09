import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoriteScreen from '../screens/FavoriteScreen';
import Icon from 'react-native-vector-icons/FontAwesome'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: "Meal Categories",
             
        }
    },
    CategoryMeals:{
        screen: CategoryMealsScreen,
        navigationOptions: (props) => ({
            headerTitle: props.navigation.getParam('categoryTitle'),
                   
        }), 

    },
    MealDetail: {
        screen: MealDetailScreen,
        //headerTitle: "Meal Detail", if we leave it, it would overwrite header title in the component
      
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : "white",                
        },
    headerTintColor: '#fff'
    }
});


const FavoriteNavigation = createStackNavigator({
    Favorite: {
        screen: FavoriteScreen,

    },
    MealDetail: {
        screen: MealDetailScreen,      
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : "white",                
        },
        headerTintColor: '#fff'
    }
    }
);

const tabScreenConfig = {
    Meals: { 
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon: (tabInfo) => { 
                return <Icon size={25} name="cutlery" color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.primaryColor   
        },
        
    },
    Favorites: {
        screen: FavoriteNavigation,
        navigationOptions: {
            tabBarLabel: "Favorites",
            tabBarIcon: (opt) => {
                return <Icon size={25} name="star" color={opt.tintColor} />;
            },
            tabBarColor: Colors.accentColor 
        }
    }
}

const MealsFavTabNavigator = createMaterialBottomTabNavigator(  
    tabScreenConfig,
    {  
        activeTintColor: Colors.accentColor,
        shifting: true
    }
   );

export default createAppContainer(MealsFavTabNavigator)



/*
const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { 
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon: (tabInfo) => { 
                return <Icon size={25} name="cutlery" color={tabInfo.tintColor}/>;
            }
        }
    },
    Favorites: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: "Favorites",
            tabBarIcon: (opt) => {
                return <Icon size={25} name="star" color={opt.tintColor} />;
            }
        }
    }
}, {
    tabBarOptions:{
        activeTintColor: Colors.accentColor
    }
});
*/

//export default createAppContainer(MealsNavigator);
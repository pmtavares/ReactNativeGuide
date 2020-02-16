import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: "Meal Categories",
            headerStyle: {
                backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : "white",                
            },
            headerTintColor: '#fff'
            
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: (props) => ({
            headerTitle: props.navigation.getParam('categoryTitle'),
            headerStyle: {
                backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : "white",                
            },
            headerTintColor: '#fff'          
        }),

    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: () => ({
            headerTitle: "Meal details screen",
                headerStyle: {
                    backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : "white",                
                },
            headerTintColor: '#fff'
        })
    }
});

export default createAppContainer(MealsNavigator);
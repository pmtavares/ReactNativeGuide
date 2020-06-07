import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoryMealScreen = props => {

    const renderMealItem = itemData =>{
        return(
            <MealItem title={itemData.item.title} 
                duration={itemData.item.duration} 
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({routeName:"MealDetail", params: {id: itemData.item.id}})
                }}
            />

        );
    };
    const catId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => 
                meal.categoryIds.indexOf(catId) >=0)

        return (
            <View style={styles.screen}>
                <FlatList  style={{width: '100%'}}
                    data={displayMeals} keyExtractor={(item,index) => item.id}
                    renderItem={renderMealItem}
                />
            </View>

        )
    
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default CategoryMealScreen;
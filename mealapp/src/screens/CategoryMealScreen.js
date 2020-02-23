import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealScreen = props => {

    const renderMealItem = itemData =>{
        return(
            <View><Text>{itemData.item.title}</Text></View>
        );
    };
    const catId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => 
                meal.categoryIds.indexOf(catId) >=0)

        return (
            <View style={styles.screen}>
                <FlatList 
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
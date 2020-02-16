import React from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
        return (
            <View style={styles.screen}>
                <Text>
                    Categories Meal Screen 
                </Text>
                <Text>{selectedCategory.title}</Text>
                <Button title="Go to meals detail " onPress={() => props.navigation.navigate("MealDetail")}/>
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
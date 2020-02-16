import React from 'react'
import {View, StyleSheet, Button, Text, FlatList, TouchableOpacity, Platform} from 'react-native'
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity 
                onPress={() => props.navigation.navigate("CategoryMeals", {categoryId: itemData.item.id, categoryTitle:itemData.item.title })} 
                            style={styles.grid} >
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
     }
        return (
            <View style={styles.screen}>
                <FlatList numColumns={2} data={CATEGORIES} keyExtractor={(item, id) => item.id}
                    renderItem={renderGridItem}
                />
                <Button title="Go to meals " onPress={() => 
                    props.navigation.navigate("CategoryMeals", {categoryId: itemData.item.id})}/>
            </View>

        )
    
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    grid: {
        flex: 1,
        margin: 15,
        height: 150
    }
})



export default CategoriesScreen;

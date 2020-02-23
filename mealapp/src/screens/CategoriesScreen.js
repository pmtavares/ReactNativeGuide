import React from 'react'
import {View, StyleSheet, Button, Text, FlatList, TouchableOpacity, Platform} from 'react-native'
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
    const renderGridItem = (itemData) => {
        return(       
        <CategoryGridTile title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={() => {
            props.navigation.navigate({routeName: "CategoryMeals", 
            params: {categoryId: itemData.item.id }})
       }}/>)

     }
        return (
            <View style={styles.screen}>
                <FlatList numColumns={2} data={CATEGORIES} keyExtractor={(item, id) => item.id}
                    renderItem={renderGridItem}
                />

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

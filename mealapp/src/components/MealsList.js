import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import MealItem from './MealItem';

const MealsList = (props) => {

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
    return (
        <View style={styles.list}>
            <FlatList  style={{width: '100%'}}
                data={props.listData} keyExtractor={(item,index) => item.id}
                renderItem={renderMealItem}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    list:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default MealsList

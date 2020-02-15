import React from 'react'
import {View, StyleSheet, Button, Text, FlatList} from 'react-native'
import {CATEGORIES} from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return <View style={styles.grid}>
        <Text>{itemData.item.title}</Text>
        </View>
}

const CategoriesScreen = props => {
        return (
            <View style={styles.screen}>
                <FlatList numColumns={2} data={CATEGORIES} keyExtractor={(item, id) => item.id}
                    renderItem={renderGridItem}
                />
                <Button title="Go to meals " onPress={() => props.navigation.navigate("CategoryMeals")}/>
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

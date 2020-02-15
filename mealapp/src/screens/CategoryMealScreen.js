import React from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'

const CategoryMealScreen = props => {
        return (
            <View style={styles.screen}>
                <Text>
                    Categories Meal Screen
                </Text>
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
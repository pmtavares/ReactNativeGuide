import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {MEALS} from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = props => {
        const mealId = props.navigation.getParam('id');
        const selectedMeal = MEALS.find(opt => opt.id === mealId)

        return (
            <View style={styles.screen}>
                <Text>
                {selectedMeal.title}
                </Text>
                <Button title="Go back to main " onPress={() => props.navigation.popToTop()}/>
            </View>

        )
    
}

MealDetailScreen.navigationOptions = (navigationData) =>{
    const mealId = navigationData.navigation.getParam('id');
    const selectedMeal = MEALS.find(opt => opt.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title="favorite" 
                            iconName="rocket"/> 
                    </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default MealDetailScreen;
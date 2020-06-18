import React, {useEffect} from 'react'
import {View, StyleSheet, Text,  ScrollView, Image} from 'react-native'
import {MEALS} from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import {useSelector} from 'react-redux'

const ListItem = ({children}) => {
    return <View style={styles.listItem}>
        <DefaultText>{children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {
        const mealId = props.navigation.getParam('id');
        const mealsAvailable = useSelector(state => state.meals.meals);
        const selectedMeal = mealsAvailable.find(opt => opt.id === mealId);


       //useEffect(() => {
         //   props.navigation.setParams({mealTitle: selectedMeal.title});
        //}, [selectedMeal])

        return (
            <ScrollView>
                 <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                    <View style={styles.details}>
                        <DefaultText>{selectedMeal.duration}m</DefaultText>
                        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                    </View>
                    <Text style={styles.title}>Ingredients</Text> 
                    {
                        selectedMeal.ingredients.map(ingredient => (
                        <ListItem key={ingredient}>{ingredient}</ListItem>  )
                        )
                    }
                   
                    <Text style={styles.title}>Steps</Text> 
                    {
                        selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>  )
                    }
                         
                
            </ScrollView>
          

        )
    
}

MealDetailScreen.navigationOptions = (navigationData) =>{
    const mealId = navigationData.navigation.getParam('id');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    //const selectedMeal = MEALS.find(opt => opt.id === mealId);
    return {
        headerTitle: mealTitle,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title="favorite" 
                            iconName="star"/> 
                    </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200
    },
    details:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    }, 
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth:1,
        padding: 10
    }
})

export default MealDetailScreen;
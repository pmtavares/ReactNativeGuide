import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Text,Switch } from 'react-native';
import Colors from '../constants/Colors'
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals'

const FilterSwitch =(props) => {
    return (
                <View style={styles.filterContainer}>
                    <Text style={styles.titleFilter}>{props.label}</Text>
                    <Switch 
                        trackColor={{true: Colors.primaryColor}}
                        thumbColor={Colors.primaryColor}
                        value={props.state} 
                        onValueChange={props.onChange}/>
                </View>
    )
}

const FilterScreen = props => {
        const {navigation} = props;

        const [isGlutenFree, setIsGlutenFree] = useState(false);
        const [isLactoseFree, setIsLactoseFree] = useState(false);
        const [isVegan, setIsVegan] = useState(false);
        const [isVegetarian, setIsVegetarian] = useState(false);

        const dispatch = useDispatch();
        const saveFilters = useCallback(() => {
            const appliedFilters = {
                glutenFree: isGlutenFree,
                lactoseFree: isLactoseFree,
                vegan: isVegan,
                vegetarian: isVegetarian
            };

            dispatch(setFilters(appliedFilters));
        }, [isGlutenFree,isLactoseFree, isVegan,isVegetarian,dispatch ])

        useEffect(() => {
            navigation.setParams({save: saveFilters})
        }, [saveFilters])
        
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Available Filters</Text>
                
                <FilterSwitch label="Gluten-free" state={isGlutenFree}
                    onChange={(newValue) => setIsGlutenFree(newValue)}/>

                <FilterSwitch label="Lactose-free" state={isLactoseFree}
                    onChange={(newValue) => setIsLactoseFree(newValue)}/>

                <FilterSwitch label="Vegan" state={isVegan}
                    onChange={(newValue) => setIsVegan(newValue)}/>

                <FilterSwitch label="Vegetarian" state={isVegetarian}
                    onChange={(newValue) => setIsVegetarian(newValue)}/> 

            </View>

        )
    
}


FilterScreen.navigationOptions = (navigationData) =>{
    return {
        headerTitle: "Filter Meals",

    }
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignContent: 'center'
    },
    title:{
        fontFamily: 'opens-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'

    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '100%',
        marginVertical: 10
    },
    titleFilter:{
        width: 200,
        borderColor: Colors.primaryColor,

    }
})

export default FilterScreen;
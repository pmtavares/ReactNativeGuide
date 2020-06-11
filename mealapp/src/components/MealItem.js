import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import DefaultText from './DefaultText'

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>        
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </ImageBackground>
                        
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                    
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow:{
        flexDirection: 'row',       

    },
    mealItem:{
        height: 200,
        width: '94%',
        marginLeft: '3%',
        padding: 3,
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader:{
        height: "85%"
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }
});

export default MealItem;
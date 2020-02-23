import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native'


const CategoryGridTile = props => {
    return (    
        <TouchableOpacity  style={styles.gridItem}
            onPress={props.onSelect} 
        >
            <View style={{...styles.container, ...{backgroundColor: props.color}}} >
                <Text numberOfLines={2} style={styles.Text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        textShadowOffset:{width: 0, height: 2},
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title:{
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryGridTile;

import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const FilterScreen = props => {
        return (
            <View style={styles.screen}>
                <Text>
                FilterScreen
                </Text>
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

export default FilterScreen;
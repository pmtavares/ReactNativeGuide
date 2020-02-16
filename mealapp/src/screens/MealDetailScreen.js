import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const MealDetailScreen = props => {
        return (
            <View style={styles.screen}>
                <Text>
                Meail Detail Screen
                </Text>
                <Button title="Go back to main " onPress={() => props.navigation.popToTop()}/>
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

export default MealDetailScreen;
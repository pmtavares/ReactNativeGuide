import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const FavoriteScreen = props => {
        return (
            <View style={styles.screen}>
                <Text>
                FavoriteScreen
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

export default FavoriteScreen;
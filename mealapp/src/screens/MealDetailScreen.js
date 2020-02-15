import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const MeailDetailScreen = props => {
        return (
            <View style={styles.screen}>
                <Text>
                MeailDetailScreen
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

export default MeailDetailScreen;
import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

const GameOverScreen = props =>
{
    return (
        <View style={styles.screen}>
           <Text>Game over</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>User Number: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>
    )
}
const styles = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent: 'center'
        }
})

export default GameOverScreen
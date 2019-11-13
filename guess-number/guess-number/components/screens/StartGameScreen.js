import React, {useState} from 'react';
import {View,Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../Card';
import Colors from '../../constants/color'
import Input from '../Input';
const StartGameScreen = props =>
{
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInputHandler = ()=>
    {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler=() =>
    {
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber == NaN || chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert('Invalid Number', 'Number has to be a number between 1  and 99', 
                    [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
    }

    let confirmedOutput;

    if(confirmed)
    {
        confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>
    }
    

    return (
        <TouchableWithoutFeedback onPress={()=> {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer} >
                        <Text>Select a Number</Text>
                        <Input style={styles.input} 
                                blurOnSubmit autocapitalize='none' autoCorrect={false}
                                keyboardType="numeric" maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}/>
                        <View style={styles.buttonContainer}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
                            <Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'    
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: 
    {
        fontSize: 20,
        marginVertical: 10
    
    },
    input:
    {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen
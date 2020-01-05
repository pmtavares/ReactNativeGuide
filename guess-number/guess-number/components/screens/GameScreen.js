import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import NumberContainer from '../NumberContainer';
import Card from '../Card';

//Function to generate a random number
const generateNumber = (min, max, exclude) => 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max-min)) + min;

    if(randomNumber === exclude)
    {
        return generateNumber(min, max, exclude);
    }
    else{
        return randomNumber;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateNumber(1,100, props.userChoise));
    const [endGame, setEndGame] = useState('');

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const {userChoise, onGameOver} = props;

    useEffect(() => {
        if(currentGuess === userChoise)
        {
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoise, onGameOver]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoise) || 
                (direction ===  'greater' &&  currentGuess > props.userChoise) )
        {
            Alert.alert('Dont lie!', 'It is wrong...', [{text: "Sorry", style: "cancel"}]);
            return;
        }
        else{
            console.log("Direction is: " + direction + " Current: "+ currentGuess + " Choice: " + props.userChoise)
        }

        if(direction === "lower")
        {
            currentHigh.current = currentGuess;
        }
        else
        {
            currentLow.current = currentGuess;           
        }
        const nextNumber = generateNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    const finishGame = () => {
        setEndGame(false);
        setCurrentGuess(undefined);
        props.userChoise = undefined;
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this,'lower')} />
                <Button title='GREATER' onPress={nextGuessHandler.bind(this,'greater')} />
            </Card>
            <Card>
                <Button title='End Game' onPress={finishGame}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 200,
        maxWidth: '80%',
        marginBottom: 1
    }
})

export default GameScreen;
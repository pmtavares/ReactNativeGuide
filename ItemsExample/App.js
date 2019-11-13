import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currenGoals => [...currenGoals, {id: Math.random().toString(), value:goalTitle }]);
    setIsAddMode(false);
  }

  //Example to use touchable
  const onDeleteHandler = goalId =>
  {
    setCourseGoals(currenGoals => {
      return currenGoals.filter((goal) => goal.id !== goalId);
    });
    console.log("Touchable works for id: " + goalId);
  }

  const cancelGoalAddHandler = () =>
  {
    setIsAddMode(false);
  }
0
  return (
    <View style={styles.screen}>
          <Button title="Add a new goal"  onPress={()=> setIsAddMode(true)}/>
          <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler}/>
    {/* Flat list will not render all the data in the screen */}
    <FlatList keyExtractor = {(item, index) => item.id} 
      data={courseGoals} renderItem={ itemData => 
      <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={onDeleteHandler }/>}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
 
  listItem : {
    padding:10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});

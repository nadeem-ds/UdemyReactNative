/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';

function App() {
  const [enteredGoal,setEnteredGoal] = useState()
  const [goal,setGoal] = useState([])

  const goalInputHandler = (e)=>{
    setEnteredGoal(e)
    // setEnteredGoal('')
  }
  const goalAddHandler = () =>{
    console.log("Goal-------",goal)
    setGoal(currentGoal => [...currentGoal,enteredGoal])
  }
  console.log("finalgoal------",goal)
  return (
     //start creating first screen
    //  <SafeAreaView>
     <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        placeholder='Enter your goal'
        onChangeText={goalInputHandler}
        value={goal}
        />
        <Button title='Add Goal' onPress={goalAddHandler}/>
      </View>
      <View style={styles.goalContainer}>
        <ScrollView>
        <Text style={styles.goal}>List of Goals........</Text>
        {goal.map((item)=>(
          <View key={item} style={styles.goalText}>
            <Text style={styles.goalItem}>{item}</Text>
          </View>
        )
        )}
        </ScrollView>
      </View>
     </View>
    //  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#ccc'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    borderRadius:8,
    width:'70%',
    padding:8,
    marginRight:6
  },
  goalContainer:{
    flex:5
  },
  goal:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  goalText:{
    margin:8,
    padding:8,
    backgroundColor:"#5e0acc",
    borderRadius:8,
  },
  goalItem:{
    color:"white",
    padding:6
  }
  
});

export default App;

import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, FlatList, TouchableOpacity, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from "@react-navigation/native";
import tempData from './tempData';
import Task from './components/Task';
const Home = ({navigation}) => {

    const [allTasks,setAllTasks] = useState({});
    const isFocused = useIsFocused();

    const fetchTasks = async() => {

        try{

            let tasks = [];
            const tasksCollection = await firestore().collection('tasks').orderBy('timeStamp','desc').get();            
            tasksCollection.forEach((task) => {
                console.log(task.id,task.data());
                tasks.push(task.data());

            })
            setAllTasks(tasks);
            console.log(tasks);
        }catch(err){
            console.log(err)
        }
  
    }

    

    useEffect(() => {

        if(isFocused){ 
            fetchTasks();
        }

    },[isFocused,allTasks])


    return (
        <View style={styles.container}>
            
            <FlatList 
                data={allTasks}
                renderItem={({item}) => (

                    <Task item={item}/>
                )}

            />
        
        <Button title='get' onPress={() => navigation.navigate('AddTask')}/>
        <Button title='fetch' onPress={fetchTasks}/>
        <Text>ToDo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container :{

        flex: 1,
        justifyContent: 'center'
    },
  
})

export default Home;

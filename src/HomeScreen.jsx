import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity, Image, Pressable} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from "@react-navigation/native";
import tempData from './tempData';
import Task from './components/Task';
import Button from './components/Button';
import Heading from './components/Heading';
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
            <Heading title='To-Do List'/>
            <FlatList 
                data={allTasks}
                renderItem={({item}) => (

                    <Task item={item}/>
                )}
            />
            <Button title='Add New Task' color='green' screen='AddTask'/>
       
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

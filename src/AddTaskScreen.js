import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import tempData from './tempData';
import firestore from '@react-native-firebase/firestore';

const AddTaskScreen = ({navigation}) => {

    const addTasks = async() => {

        try{   
            const docRef = await firestore().collection('tasks');
            
            docRef.add({
                title: title,
                description: desc,
                isComplete: false,
                timeStamp : firestore.FieldValue.serverTimestamp(),
                id : Date.now()
            })

            console.log('task created with id :',docRef);
            navigation.navigate('Home');
        }catch(err){

            console.log(err);
        }

    }
    const fetchTasks = async() => {

        const tasksCollection = await firestore().collection('tasks').get();
        
        tasksCollection.forEach((task) => {

            console.log(task.id);
        })
    //    await db.collection("tasks").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     });
    }
    const [title,setTitle] = useState('');
    const  [desc, setDesc] = useState('');

    const onAddTask = () =>{

        tempData.push({title:title, description:desc,isComplete:false});
        console.log(tempData);
    }
    return (
        <View>

            <Text>Add Task</Text>
            <TextInput placeholder='Enter Title' value={title} onChangeText={(title) => setTitle(title)}/>
            <TextInput placeholder='Enter Description' value={desc} onChangeText={(desc) => setDesc(desc)}/>
            <Button title='Add Task' onPress={addTasks}/>
        </View>
    );

}

const styles = StyleSheet.create({})

export default AddTaskScreen;

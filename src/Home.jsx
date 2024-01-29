import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
//  import { Input, Icon } from '@rneui/themed';
import tempData from './tempData';
const Home = ({navigation}) => {

    const [allTasks,setAllTasks] = useState({});

    const fetchTasks = async() => {

        try{

            let tasks = [];
            const tasksCollection = await firestore().collection('tasks').get();            
            tasksCollection.forEach((task) => {
                console.log(task.id,task.data());
                tasks.push(task.data());

            })
            setAllTasks(tasks);
            console.log(tasks);
        }catch(err){
            console.log(err)
        }
    //    await db.collection("tasks").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     });
    }

    useEffect(() => {

        fetchTasks();

    },[])
    return (
        <View>
            
            <FlatList 
                data={tempData}
                renderItem={({item}) => (

                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}

            />
            <TextInput placeholder='Enter a Task..'/>
            <Button title='get' onPress={() => navigation.navigate('AddTask')}/>
            <Button title='fetch' onPress={fetchTasks}/>
            <Text>ToDo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;

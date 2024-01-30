import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button, FlatList, TouchableOpacity, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const Task = ({item}) => {

    const [status, setStatus] = useState(item.isComplete);
    const [taskId, setTaskId] = useState('');

    const getTaskId = async() =>{

        try{  
            const docRef = await firestore().collection('tasks').where("id", "==", item.id).get();
            docRef.forEach(async(item)=>{
                console.log(item.id);
                setTaskId(item.id);
                setStatus(!(item.data().isComplete));
                console.log(status);
            })
            }catch(err){
                console.log(err);
            }

    }
    const deleteTask = async() =>{

        try{  
            const docRef = await firestore().collection('tasks').where("id", "==", item.id).get();
            docRef.forEach(async(item)=>{
                console.log(item.id);
                
                await firestore().collection('tasks').doc(item.id).delete();
                // setStatus(!(item.data().isComplete));
                console.log('deleted');
            })
            }catch(err){
                console.log(err);
            }
        }
        

    const updateStatus = async() =>{

      try{  
        const docRef = await firestore().collection('tasks').where("id", "==", item.id).get();
        docRef.forEach(async(item)=>{
            console.log(item.id);
            
            await firestore().collection('tasks').doc(item.id).update({
                    isComplete : !item.data().isComplete
            })
            setStatus(!(item.data().isComplete));
            console.log(status);
        })
        }catch(err){
            console.log(err);
        }
    }

    return (
        
        <View style={styles.taskContainer}>
        <Text>{item.title}</Text>
        <TouchableOpacity style={{borderWidth:2}} onPress={deleteTask}>
            <Image source={require('../../assets/delete.png')} style={{height:25,width:25}}/></TouchableOpacity>
        <TouchableOpacity style={{borderWidth:2}} onPress={updateStatus}>
           {status? <Image source={require('../../assets/greencheckbox.png')} style={{height:25,width:25}}/>:<Image source={require('../../assets/unchecked-checkbox.png')} style={{height:25,width:25}}/>}
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
 
    taskContainer:{

        borderWidth:2,
        borderRadius: 5,
        flexDirection:'row'
    }
})

export default Task;

import React from 'react';
import {View, StyleSheet, Text, TextInput, Button, FlatList, TouchableOpacity, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const Task = ({item}) => {

    const deleteTask = () =>{

        console.log('delete clicked');
    }

    const updateStatus = async() =>{

      try{  
        const docRef = await firestore().collection('tasks').where("id", "==", item.id).get();
        docRef.forEach((item)=>{
            console.log(item.data());
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
           {item.isComplete? <Image source={require('../../assets/greencheckbox.png')} style={{height:25,width:25}}/>:<Image source={require('../../assets/unchecked-checkbox.png')} style={{height:25,width:25}}/>}
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

import React, {  useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
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
        <View>
            <Text style={{fontWeight:'bold',fontSize:17}}>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
        

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={deleteTask} style={{marginHorizontal:5}}>
                <Image source={require('../../assets/delete.png')} style={{height:25,width:25}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={updateStatus}>
            {status? <Image source={require('../../assets/greencheckbox.png')} style={{height:25,width:25}}/>:<Image source={require('../../assets/unchecked-checkbox.png')} style={{height:25,width:25}}/>}
            </TouchableOpacity>
        </View>
       
    </View>
    );
}

const styles = StyleSheet.create({
 
    taskContainer:{

        borderWidth:1,
        borderColor:'#AEAEAE',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical:20,
        paddingHorizontal: 20,
        marginTop:10,
        marginHorizontal:15
    }
})

export default Task;

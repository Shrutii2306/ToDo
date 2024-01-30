import React, { useState } from 'react';
import {View,Pressable, StyleSheet, Text, TextInput, ToastAndroid} from 'react-native';
import Button from './components/Button';
import tempData from './tempData';
import firestore from '@react-native-firebase/firestore';
import Heading from './components/Heading';

const AddTaskScreen = ({navigation}) => {

    
    const [title,setTitle] = useState('');
    const  [desc, setDesc] = useState('');

    const addTasks = async() => {

       
        try{   
            if(title =='' || desc ==''){

                ToastAndroid.show('One or more fields are empty.', ToastAndroid.SHORT);
                return;
            }
    
            const docRef = firestore().collection('tasks');
            
            await docRef.add({
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
    
    return (
        <View>

            <Heading title='Add new task'/>
            <TextInput style={styles.textInput} placeholder='Enter Title' value={title} onChangeText={(title) => setTitle(title)}/>
            <TextInput style={styles.textInput} placeholder='Enter Description' value={desc} onChangeText={(desc) => setDesc(desc)}/>
            <View style={{flexDirection:'row'}}>
            <Button title='Cancel' color='red' screen='Home' />
            <Pressable  
            style={[{backgroundColor:'green'},styles.wrapperCustom]} 
            onPress={addTasks}><Text style={{color:'white'}}>Save</Text></Pressable>
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({

    textInput : {

        height:50,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical:15,
        borderColor: '#AEAEAE',
        marginHorizontal: 18
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        marginLeft:'auto',
        marginRight: 'auto',
        alignItems:'center',
    
      },
})

export default AddTaskScreen;

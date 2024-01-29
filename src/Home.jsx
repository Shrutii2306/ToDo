import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
//  import { Input, Icon } from '@rneui/themed';
const Home = () => {

    const call = async() => {  
          const tasksCollection = await firestore().collection('tasks') .doc('dURJdZAFJjkZoX1hR6Yz')
          .delete();
          console.log(tasksCollection)
    }  

    return (
        <View>
            {/* <Input
      placeholder='BASIC INPUT'
    /> */}
            <TextInput placeholder='Enter a Task..'/>
            <Button title='get' onPress={call}/>
            <Text>ToDo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;

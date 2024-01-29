import React from 'react';
import {View, StyleSheet, Text, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
//  import { Input, Icon } from '@rneui/themed';
import tempData from './tempData';
const Home = ({navigation}) => {

    const call = async() => {  
          const tasksCollection = await firestore().collection('tasks') .doc('dURJdZAFJjkZoX1hR6Yz')
          .delete();
          console.log(tasksCollection)
    }  

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
            <Text>ToDo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;

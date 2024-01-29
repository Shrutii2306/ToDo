import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AddTaskScreen = () => {

    const [task,setTask] = useState({});

    const onTitleChange = (e) => {

    }

    const onDescChange = (e) =>{

    }

    return (
        <View>
            <Text>Add Task</Text>
        </View>
    );

}

const styles = StyleSheet.create({})

export default AddTaskScreen;

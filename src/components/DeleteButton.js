import React from 'react';
import {View,TouchableOpacity, StyleSheet} from 'react-native';

const DeleteButton = () => {
    return (
        <TouchableOpacity style={{borderWidth:2}} onPress={deleteTask}>
        <Image source={require('../../assets/delete.png')} style={{height:25,width:25}}/></TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default DeleteButton;

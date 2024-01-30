import React from 'react';
import {Text, StyleSheet,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Button = ({title, color,screen}) => {

    const navigation = useNavigation();
    return (
        <Pressable  
        style={[{backgroundColor:color},styles.wrapperCustom]} 
        onPress={() => navigation.navigate(screen)}><Text style={{color:'white'}}>{title}</Text></Pressable>
    );
}

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        marginLeft:'auto',
        marginRight: 'auto',
        alignItems:'center',
    
      },
})

export default Button;

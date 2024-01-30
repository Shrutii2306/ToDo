import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Heading = ({title}) => {
    return (
        <View style={{alignItems:'center',marginTop:15,borderBottomWidth:1,paddingBottom:10,marginHorizontal:10}} >
            <Text style={{fontSize:30,fontWeight:'bold'}}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Heading;

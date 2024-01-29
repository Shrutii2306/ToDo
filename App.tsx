import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import { createStackNavigator } from '@react-navigation/stack';
import AddTaskScreen from './src/AddTaskScreen';
const Stack = createStackNavigator();

function App() {
 
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='AddTask' component={AddTaskScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
 
  container :{

    flex:1,
    justifyContent:'center'
  }
});

export default App;

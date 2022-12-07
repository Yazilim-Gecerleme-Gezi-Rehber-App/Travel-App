import React from "react";
import {Text, View, Button} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './pages/auth/HomePage';
import SignIn from './pages/auth/SignIn';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen 
                name="HomePage" 
                component={HomePage} 
                options={{ headerShown:false }}
           />
          <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{ headerShown:false }}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
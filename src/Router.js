import React from "react";
import {Text, View, Button} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './pages/auth/HomePage';
import SignIn from './pages/auth/SignIn';
import Login from './pages/auth/Login';
import ForgotPassword from "./pages/auth/ForgotPassword";
import NewPassword from "./pages/auth/NewPassword";
import ConfirmSignInMail from "./pages/auth/ConfirmSignInMail";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown:false }} >
          <Stack.Screen 
                name="HomePage" 
                component={HomePage} 
           />
          <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
           />
           <Stack.Screen 
                name="Login" 
                component={Login} 
           />
           <Stack.Screen 
                name="ResetPassword" 
                component={ForgotPassword} 
           />
           <Stack.Screen 
                name="NewPassword" 
                component={NewPassword}
           />   
           <Stack.Screen 
                name="ConfirmSignInMail" 
                component={ConfirmSignInMail}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
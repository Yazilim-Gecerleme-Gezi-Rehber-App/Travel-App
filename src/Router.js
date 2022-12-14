import React from "react";
import {Text, View, Button} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";

import FirstPage from './pages/auth/FirstPage';
import SignIn from './pages/auth/SignIn';
import Login from './pages/auth/Login';
import ForgotPassword from "./pages/auth/ForgotPassword";
import NewPassword from "./pages/auth/NewPassword";
import ConfirmSignInMail from "./pages/auth/ConfirmSignInMail";
import HomePage from "./pages/user/HomePage";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown:false }} >
          <Stack.Screen 
                name="FirstPage" 
                component={FirstPage} 
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
           <Stack.Screen 
                name="HomePage" 
                component={HomePage}
           />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
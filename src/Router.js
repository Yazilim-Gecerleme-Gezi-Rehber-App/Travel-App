import React, {useState, useEffect} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import {firebase} from '../config';

import FirstPage from './pages/auth/FirstPage';
import SignIn from './pages/auth/SignIn';
import Login from './pages/auth/Login';
import ForgotPassword from "./pages/auth/ForgotPassword";
import NewPassword from "./pages/auth/NewPassword";
import ConfirmSignInMail from "./pages/auth/ConfirmSignInMail";
import HomePage from "./pages/user/HomePage";
import ActivitiesList from './pages/user/ActivitiesList';
import DetailPage from "./pages/user/DetailPage";
import MapPage from "./pages/user/MapPage";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown:false }} >
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
                name="ForgotPassword" 
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
           <Stack.Screen 
                name="ActivitiesList" 
                component={ActivitiesList}
           />
           <Stack.Screen 
                name="MapPage" 
                component={MapPage}
           />
           <Stack.Screen 
                name="DetailPage" 
                component={DetailPage}
           />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
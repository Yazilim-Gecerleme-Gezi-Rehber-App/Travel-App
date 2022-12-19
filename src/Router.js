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

const Stack = createNativeStackNavigator();

function App(){
  //for verification mail
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   function onAuthStateChanged(user){
//      setUser(user);
//      if(initializing) setInitializing(false);
//   }

//   useEffect(() => {
//      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//      return subscriber;
//   },[]);

//   if(initializing) return null;

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
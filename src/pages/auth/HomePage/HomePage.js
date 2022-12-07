import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './HomePage.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleSignin, GoogleSigninButton, statusCodes,} from '@react-native-google-signin/google-signin';


const HomePage = ({navigation}) => {
    //for google sign in
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
        webClientId: '311112857802-vkp8pumgmki24l0sopq86tg6fgplr5i6.apps.googleusercontent.com', 
        offlineAccess: true, 
        hostedDomain: '', 
        forceCodeForRefreshToken: true, 
        accountName: '', 
        iosClientId: '<FROM DEVELOPER CONSOLE>', 
        googleServicePlistPath: '', 
        openIdRealm: '', 
        profileImageSize: 120,
    });

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          alert(JSON.stringify({userInfo}));
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
    };


    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../components/assets/logo_transparent.png')} />
            <Text style={styles.header}>Travel Guide App</Text>
            <View style={styles.body_container}>
                <TouchableOpacity style={styles.google} onPress={signIn}>
                    <Icon name="google" size={35} />
                    <Text style={styles.google_text}>Google İle Kayıt Ol</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebook}>
                    <Icon name="facebook" size={40} />
                    <Text style={styles.facebook_text}>Facebook İle Kayıt Ol</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sign_in} onPress={() => navigation.navigate('SignIn') }>
                    <Text style={styles.sign_in_text}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer_container}>
                <Text style={styles.question_text}>Zaten bir hesabınız var mı?</Text>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.login_text}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default HomePage;
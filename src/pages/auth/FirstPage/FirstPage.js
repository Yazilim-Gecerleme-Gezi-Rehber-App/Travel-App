import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, Image, Pressable} from 'react-native';
import styles from './FirstPage.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import Button from "../../../components/Button";


const FirstPage = ({navigation}) => {
    //for google sign in
    const [userGoogleData, setUserGoogleData] = useState({});//google ile kayıt olmak
    const [userFacbookData, setUserFacebookData] = useState({});

    //google ile kayıt olmak
    useEffect(() => {
      GoogleSignin.configure({
        webClientId: '311112857802-vkp8pumgmki24l0sopq86tg6fgplr5i6.apps.googleusercontent.com',
      });
    },[]);

    //google ile kayıt olmak
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

    //google ile kayıt olmak
    const signIn = async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        navigation.navigate('HomePage');
        return auth().signInWithCredential(googleCredential);
    };

    //açılan google oturumunu kapatmak için,bunu app i birince ayarlar kısmına ekle
    const signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await auth().signOut();
      } catch (error) {
        console.log(error);
      }
    };

    //facebook ile kayıt olmak için
    const facebookLogin = async () => {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
    
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      navigation.navigate('HomePage');
      return auth().signInWithCredential(facebookCredential);
    };

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../components/assets/logo_transparent.png')} />
            <Text style={styles.header}>Travel Guide App</Text>
            <View style={styles.body_container}>
                <TouchableOpacity 
                  style={styles.google} 
                  onPress={() => signIn()
                    .then(res => {
                      console.log(res.user);
                      setUserGoogleData(res.user);
                  })
                  .catch(error => console.log(error))}
                >
                  <Icon name="google" size={35} />
                  <Text style={styles.google_text}>Google İle Oturum Aç</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.facebook}
                  onPress={() => facebookLogin()
                    .then(res => {
                      console.log(res);
                      setUserFacebookData(res.data);
                    })
                    .catch(error => console.log(error))}
                >
                  <Icon name="facebook" size={40} />
                  <Text style={styles.facebook_text}>Facebook İle Oturum Aç</Text>
                </TouchableOpacity>
                <Button 
                  onPress={() => navigation.navigate('SignIn')}
                  text="Kayıt Ol"
                />
                {/* yazısı beyaz gözükmüyor hesap çıkışı burası en son bir yere ekleyeceksin */}
                <TouchableOpacity onPress={signOut}>
                  <Text style={{ alignSelf:'center', color:'white' }}>Oturumunu Kapat!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer_container}>
                <Text style={styles.question_text}>Zaten bir hesabınız var mı?</Text>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.login_text} onPress={() => navigation.navigate('Login') }>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default FirstPage;
import React from "react";
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles from './Login.styles';

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Giriş Ekranı</Text>
           <View style={styles.LoginWrapper}></View>
            <Text style={styles.LineStyle} >Emailiniz</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <Text style={styles.LineStyle}>Şifreniz</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <TouchableOpacity style={styles.sign_in} >
                    <Text style={styles.sign_in_text}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword') }>
                    <Text style={styles.question_text}>Şifremi unuttum</Text>
                </TouchableOpacity>
              
        </View>
    );
};

export default Login;
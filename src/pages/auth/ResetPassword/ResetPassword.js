import React from "react";
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles from './ResetPassword.styles';

const ResetPassword = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Şifremi Unuttum</Text>
            
            <View style={styles.RPWrapper}><Text style={styles.LineStyle} >Emailiniz</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            
            <TouchableOpacity style={styles.sign_in} >
                    <Text style={styles.sign_in_text}>Gönder</Text>
                </TouchableOpacity></View>
           
            
        </View>
    );
};

export default ResetPassword;
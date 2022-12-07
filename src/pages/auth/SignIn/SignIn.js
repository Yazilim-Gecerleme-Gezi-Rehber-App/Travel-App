import React from "react";
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles from './SignIn.styles';

const SignIn = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Kayıt Ekranı</Text>
            <Text style={styles.LineStyle}>Adınız</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <Text style={styles.LineStyle}>Soyadınız</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <Text style={styles.LineStyle} >Emailiniz</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <Text style={styles.LineStyle}>Şifreniz</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <Text style={styles.LineStyle}>Şifrenizin Tekrarı</Text>
            <TextInput style={styles.inputStyle}></TextInput>
            <TouchableOpacity style={styles.sign_in} >
                    <Text style={styles.sign_in_text}>Kayıt Ol</Text>
                </TouchableOpacity>
        </View>
    );
};

export default SignIn;

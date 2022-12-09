import React, {useState} from "react";
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles from './Login.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Login = ({navigation}) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Giriş Ekranı</Text>

            <View style={styles.body_container}>
                <Text style={styles.lineStyle} >E-Mailiniz</Text>
                <Input
                    value={mail}
                    setValue={setMail}
                    placeholder="E-Mailiniz"
                />
                <Text style={styles.lineStyle}>Şifreniz</Text>
                <Input
                    value={password}
                    setValue={setPassword}
                    placeholder="Şifreniz"
                    secureTextEntry={true}
                />
                <Button
                    text="Giriş Yap"
                />
                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword') }>
                    <Text style={styles.question_text}>Şifremi unuttum</Text>
                </TouchableOpacity>
            </View>             
        </View>
    );
};

export default Login;
import React, {useState} from "react";
import {Text, View} from 'react-native';
import styles from './ResetPassword.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const ResetPassword = () => {
    const [mail, setMail] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Şifremi Unuttum</Text>
            <View style={styles.body_container}>
                <Text style={styles.lineStyle}>E-Mailiniz</Text>
                <Input
                    value={mail}
                    setValue={setMail}
                    placeholder="E-Mailiniz"
                />
                <Button
                    text="Gönder"
                />
            </View> 
        </View>
    );
};

export default ResetPassword;
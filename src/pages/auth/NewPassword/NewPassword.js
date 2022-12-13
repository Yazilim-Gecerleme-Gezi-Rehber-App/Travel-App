import React, {useState} from "react";
import {Text, View} from 'react-native';
import styles from './NewPassword.styles';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const NewPassword = ({navigation}) => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Yeni Şifre Ekranı</Text>
            <View style={styles.body_container}>
                <Text style={styles.text}>Mailinize Gelen Kodu Giriniz</Text>
                <Input
                    value={code}
                    setValue={setCode}
                    placeholder="Gelen Kod"
                />

                <Text style={styles.text}>Yeni Şifrenizi Giriniz</Text>
                <Input
                    value={newPassword}
                    setValue={setNewPassword}
                    placeholder="Yeni Şifre"
                />

                <Button
                    text="Kaydet"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
};

export default NewPassword;
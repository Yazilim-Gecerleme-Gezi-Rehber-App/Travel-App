import React, {useState} from "react";
import {Text, View} from 'react-native';
import styles from './ConfirmSignInMail.styles';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const ConfirmSignInMail = ({navigation}) => {
    const [code, setCode] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Mail Onaylama</Text>
            <View style={styles.body_container}>
                <Text style={styles.text}>Mailinize Gelen Onay Kodunu Giriniz</Text>
                <Input
                    value={code}
                    setValue={setCode}
                    placeholder="Kod"
                />
                <Button
                    text="Gönder"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
};

export default ConfirmSignInMail;
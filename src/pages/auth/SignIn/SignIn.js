import React, {useState} from "react";
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import styles from './SignIn.styles';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const SignIn = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [againPassword, setAgainPassword] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Kayıt Ekranı</Text>

            <Text style={styles.lineStyle}>Adınız</Text>
            <Input
                value={name}
                setValue={setName}
                placeholder="Adınız"

            />

            <Text style={styles.lineStyle}>Soyadınız</Text>
            <Input
                value={surname}
                setValue={setSurname}
                placeholder="Soyadınız"

            />

            <Text style={styles.lineStyle} >Emailiniz</Text>
            <Input
                value={mail}
                setValue={setMail}
                placeholder="Emailiniz"

            />

            <Text style={styles.lineStyle}>Şifreniz</Text>
            <Input
                value={password}
                setValue={setPassword}
                placeholder="Şifreniz"
                secureTextEntry={true}
            />

            <Text style={styles.lineStyle}>Şifrenizin Tekrarı</Text>
            <Input
                value={againPassword}
                setValue={setAgainPassword}
                placeholder="Şifrenizin Tekrarı"
                secureTextEntry={true}
            />

            <Button
                text="Kayıt Ol"
            />
        </View>
    );
};

export default SignIn;

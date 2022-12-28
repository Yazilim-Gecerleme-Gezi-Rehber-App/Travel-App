import React, {useState} from "react";
import { Text, View} from 'react-native';
import styles from './SignIn.styles';
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

const initialFormValues = {
    username: '',
    surname: '',
    usermail: '',
    password: '',
    againPassword: ''
};

const SignIn = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(formValues) {
        if(formValues.password ==! formValues.againPassword){
            showMessage({
                message:'Şifreler Uyuşmuyor!',
                type:'danger',
            });
            return;
        }

        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.againPassword,
            );
            showMessage({
                message: 'Kullanıcı Kaydı Başarılı!',
                type: 'success',
            });
            navigation.navigate('Login');
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kayıt Ekranı</Text>

        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
          {({values, handleChange, handleSubmit}) => (
            <>
              <Text style={styles.lineStyle}>Adınız</Text>
              <Input 
                value={values.username} 
                onType={handleChange('username')}
                placeholder="Adınız"
              />

              <Text style={styles.lineStyle}>Soyadınız</Text>
              <Input
                value={values.surname} 
                onType={handleChange('surname')}
                placeholder="Soyadınız"
              />

              <Text style={styles.lineStyle}>E-Mailiniz</Text>
              <Input 
                value={values.usermail} 
                onType={handleChange('usermail')}
                placeholder="E-Mailiniz"
                type="email"
              />

              <Text style={styles.lineStyle}>Şifreniz</Text>
              <Input
                value={values.password} 
                onType={handleChange('password')}
                placeholder="Şifreniz"
                secureTextEntry={true}
              />
              <Text style={styles.lineStyle}>Şifrenizin Tekrarı</Text>
              <Input
                value={values.againPassword} 
                onType={handleChange('againPassword')}
                placeholder="Şifrenizin Tekrarı"
                secureTextEntry={true}
              />

              <Button
                text="Kayıt Ol"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
      </View>
    );
};

export default SignIn;

import React, {useState} from "react";
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './Login.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initialFormValues = {
    usermail :'',
    password :''
};

const Login = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            );
            setLoading(false);
            navigation.navigate('HomePage');
        } catch (error) {
            console.log(error);
            showMessage({
                message: authErrorMessageParser(error.code),
                type:'danger'
            })
            setLoading(false);
        }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Giriş Ekranı</Text>

        <View style={styles.body_container}>
          <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
            {({values, handleChange, handleSubmit}) => (
                <>
                <Text style={styles.lineStyle}>E-Mailiniz</Text>
                <Input 
                    value={values.usermail} 
                    onType={handleChange('usermail')}
                    placeholder="E-Mailiniz"
                    autoCorrect={false} 
                />
                <Text style={styles.lineStyle}>Şifreniz</Text>
                <Input
                    value={values.password}
                    onType={handleChange('password')}
                    placeholder="Şifreniz"
                    secureTextEntry={true}
                    autoCorrect={false}
                />
                <Button 
                    text="Giriş Yap" 
                    loading={loading}
                    onPress={handleSubmit}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}
                  loading={loading}
                >
                  <Text style={styles.question_text}>Şifremi unuttum</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    );
};

export default Login;
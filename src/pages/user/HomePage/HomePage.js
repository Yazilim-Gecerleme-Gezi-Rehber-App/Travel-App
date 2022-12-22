import React from "react";
import {Text, View} from 'react-native';
import styles from './HomePage.styles';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import Dropdowns from '../../../components/Dropdowns';
import Button from '../../../components/Button';
import {ImageBackground} from 'react-native'

const HomePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>HOŞGELDİNİZ</Text>
            <View style={styles.body_container}>
                <Dropdowns/>
            </View>
            <View style={styles.footer_container}>
                <Button
                    style={styles.button}
                    text="Rota Oluştur"
                    onPress={() => navigation.navigate('ActivitiesList')}
                />
            </View>
        </View>
    );
};

export default HomePage;
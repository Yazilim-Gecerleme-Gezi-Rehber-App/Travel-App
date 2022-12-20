import React from "react";
import {Text, View} from 'react-native';
import styles from './HomePage.styles';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import Dropdown from '../../../components/Dropdown';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>HOŞGELDİNİZ</Text>
            <View style={styles.body_container}>
                <Dropdown/>
            </View>
            <View style={styles.footer_container}>

            </View>
        </View>
    );
};

export default HomePage;
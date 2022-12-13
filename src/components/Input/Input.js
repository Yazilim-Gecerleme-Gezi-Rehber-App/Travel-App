import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.styles';

const Input = ({value, onType, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        value={value}
        onChangeText={onType}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      >
      </TextInput>
    </View>
  );
};

export default Input;
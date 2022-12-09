import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.styles';

const Input = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      >
      </TextInput>
    </View>
  );
};

export default Input;
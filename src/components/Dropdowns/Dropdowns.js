import React, {useState} from "react";
import {View ,Text} from 'react-native';
import styles from './Dropdowns.styles';
import {Dropdown}  from 'react-native-element-dropdown';

const Dropdowns = ({valueField,labelField,placeholder,onChange,renderItem,value,data}) => {

    return (
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          textItem={styles.textItem}
          data={data}
          search
          maxHeight={300}
          labelField={labelField}
          valueField={valueField}
          placeholder={placeholder}
          searchPlaceholder="Ara..."
          value={value}
          onChange={onChange}
          renderItem={renderItem}
        />   
      </View>
    );
};

export default Dropdowns;
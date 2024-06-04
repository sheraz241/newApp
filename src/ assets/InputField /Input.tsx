import { View, TextInput } from 'react-native';
import React from 'react';
import { StyleSheetInputField } from '../Styles/InputField';
const Input = ({ value, onChangeText, placeholder, keyboardType }) => {
  return (
    <View>
      <TextInput
        style={StyleSheetInputField.input} 
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
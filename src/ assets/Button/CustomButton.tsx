import React from 'react';
import {
  StyleSheet,
  Button, // Alias the imported Button component
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { StyleSheetButton } from '../Styles/Button';
const CustomButton = ({title ,onPress ,backgroundColor ,textColor}) => (
  <SafeAreaView style={StyleSheetButton.container}>
    <TouchableOpacity
      style={[StyleSheetButton.buttonContainer ,{ backgroundColor ,textColor}]}
      onPress={onPress}
    >
      <Text style={StyleSheetButton.btnText}>{title}</Text>
    </TouchableOpacity>
  </SafeAreaView>
);
export default CustomButton;

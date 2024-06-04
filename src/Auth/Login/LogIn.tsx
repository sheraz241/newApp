import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheetLogin } from '../../ assets/Styles/Login';
import CustomButton from '../../ assets/Button/CustomButton';
import { primaryColors } from '../../ assets/color';
import Input from "../../ assets/InputField /Input"
import http from '../../http/http';
const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (email: any) => {
    setEmail(email);
  };
  const onChangePasswprd = (password: any) => {
    setPassword(password)
  }
  const onHome = () => {
    navigation.navigate("Home")
  }
  const onPressApple = () => {
    Alert.alert("login Apple")
  }
  const onSignup = () => {
    navigation.navigate("Signup")

  }
  const onPressFacebook = () => {
    Alert.alert("login Facebook")
  }
  const onPressLogin = () => {
    let data = {
      email: email,
      password: password,
    };
    http.post("auth/login", data)
      .then((response) => {
        console.log("loginpage ++++++++++++++++++++")
        console.log(JSON.stringify(response.data));
        navigation.navigate("Home")
      })
      .catch((error) => {
        console.log(error, "error ++++++++++++++");
      });
  };
  return (
    <View style={StyleSheetLogin.container}>
      <Text style={StyleSheetLogin.title}> Login </Text>
      <Input
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Enter a Email"
        keyboardType="email-address"
      />
      <TextInput
        style={StyleSheetLogin.input}
        onChangeText={onChangePasswprd}
        value={password}
        placeholder="Password"
        keyboardType="default"
      />
      <View style={{ paddingTop: 10, }}>
        <CustomButton
          title="Login"
          backgroundColor={primaryColors.darkblueColor}
          textColor={primaryColors.WhiteColor}
          onPress={() => onPressLogin()}
        />
      </View>
      <View>
        <Text style={StyleSheetLogin.textOR}>
          {"_______________________OR_________________________"}
        </Text>
      </View>
      <View style={{ paddingTop: 20, }}>
        <CustomButton
          title="Log In with Apple"
          onPress={() => onPressApple()}
          backgroundColor={primaryColors.darkblackColor}
          textColor={primaryColors.WhiteColor}
        />
      </View>
      <View style={{ paddingTop: 20, }}>
        <CustomButton
          title="Log In with Facebook"
          onPress={() => onPressFacebook()}
          backgroundColor={primaryColors.lightblue}
          textColor={primaryColors.WhiteColor}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text>
          Don’t have a account? <Text style={StyleSheetLogin.textsign}
            onPress={() => onSignup()}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  )
}
export default LogIn
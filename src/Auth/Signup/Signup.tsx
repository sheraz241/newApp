import { View, Text, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import Input from '../../ assets/InputField /Input';
import { StyleSheetSingup } from '../../ assets/Styles/Signup';
import { CountryPicker } from "react-native-country-codes-picker";
import CustomButton from '../../ assets/Button/CustomButton';
import { primaryColors } from '../../ assets/color';
import http from '../../http/http'
import { useNavigation } from '@react-navigation/native';
import { storage } from '../../http/storage';
const Signup = () => {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+92');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [Phone, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const onChangeName = (text) => setFirstName(text);
    const onChangeLastName = (text) => setLastName(text);
    const onChangePassword = (text) => setPassword(text);
    const onChangePasswordConfirm = (text) => setPasswordConfirm(text);
    const onChangeEmail = (email) => setEmail(email);
    const onChangePhoneNumber = (phonenumber) => setPhoneNumber(phonenumber)
    const onPressApple = () => {
        Alert.alert("login Apple")
    }
    const onPressSignup = () => {
        let phoneNumberWithCode = `${countryCode}${Phone}`;
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password1: password,
            password2: passwordConfirm,
            phone: phoneNumberWithCode,
            role: "customer",
        };
        http.post("auth/signup", data)
            .then((response) => {
                console.log(JSON.stringify(response?.data));
                storage.set("token", response?.data?.token)
                navigation.navigate("EmailVerification", { email: email })
            })
            .catch((error) => {
                console.log(error, "error");
            });
    };
    return (
        <ScrollView keyboardShouldPersistTaps={"always"} contentContainerStyle={StyleSheetSingup.container}>
            <Text style={StyleSheetSingup.title}>Sign up</Text>
            <Input
                value={firstName}
                onChangeText={onChangeName}
                placeholder="First Name"
                keyboardType="default"
            />
            <View>
                <Input
                    value={lastName}
                    onChangeText={onChangeLastName}
                    placeholder="Last Name"
                    keyboardType="default"
                />
            </View>
            <View>
                <Input
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    keyboardType="default"
                />
            </View>
            <View>
                <Input
                    value={passwordConfirm}
                    onChangeText={onChangePasswordConfirm}
                    placeholder="Password Confirm"
                    keyboardType="default"
                />
            </View>
            <View>
                <Input
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Email"
                    keyboardType="email-address"
                />
            </View>
            <View style={[{ flexDirection: "row" }, StyleSheetSingup.inputView]}>
                <TouchableOpacity
                    onPress={() => setShow(true)}
                    style={{
                        height: 50,
                        // backgroundColor: 'black',
                        borderRadius: 5,
                        padding: 15,
                    }}
                >
                    <Text style={{
                        padding: 2,
                        color: 'black',
                        fontSize: 14
                    }}>
                        {countryCode}
                    </Text>
                </TouchableOpacity>
                <CountryPicker
                    show={show}
                    pickerButtonOnPress={(item) => {
                        setCountryCode(item.dial_code);
                        setShow(false);
                    }}
                />
                <TextInput
                    style={StyleSheetSingup.input}
                    onChangeText={onChangePhoneNumber}
                    value={Phone}
                    placeholder="Phone Number"
                    keyboardType="numeric"
                />
            </View>
            <View style={{ paddingTop: 30, }}>
                <CustomButton
                    title="Sign Up"
                    backgroundColor={primaryColors.darkblueColor}
                    textColor={primaryColors.WhiteColor}
                    onPress={() => onPressSignup()}
                // onPress={() => onSignup()}

                />
            </View>
            <View>
                <Text style={StyleSheetSingup.textOR}>
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
                    onPress={() => onPressApple()}
                    backgroundColor={primaryColors.lightblue}
                    textColor={primaryColors.WhiteColor}
                />
            </View>


        </ScrollView>
    );
};

export default Signup;

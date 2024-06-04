import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { StyleSheetVerification } from '../../ assets/Styles/EmailVerification'
import CustomButton from '../../ assets/Button/CustomButton';
import { primaryColors } from '../../ assets/color';
import { useRoute, useNavigation } from '@react-navigation/native';
import CustomModal from '../../ assets/Modal/CustomModal';
import http from '../../http/http';
const Verification = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const { email } = route?.params
  console.log("email", email)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const inputs = useRef([]);
  const handleChangeText = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < 5 && text) {
        inputs.current[index + 1].focus();
      }
    }
  };
  const handleKeyPress = ({ nativeEvent: { key } }, index) => {
    if (key === 'Backspace') {
      if (otp[index] !== '') {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };
  const onPressVerify = () => {
    let data = {
      email: email,
      otp: otp.join('')
    };
    http.post("auth/match-otp", data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // navigation.navigate("EmailVerification")
        setIsModalVisible(true)
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  const onPressResend = () => {
    let data = {
      email: email,
    };
    http.post("auth/forget-password", data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error, "errorauth/forget-password");
      });
  };
  const onPresslogin = () => {
    navigation.navigate("Login")

  }
  return (
    <View style={StyleSheetVerification.container}>
      <View>
        <Text style={StyleSheetVerification.verificationtext}>Email verification</Text>
      </View>
      <View style={{ width: 200 }}>
        <Text style={StyleSheetVerification.verification_otp_text}>
          Please enter the 6 digit OTP sent to your email address
        </Text>
      </View>
      <View style={StyleSheetVerification.opt_box}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => inputs.current[index] = ref}
            style={StyleSheetVerification.inputotp}
            onChangeText={text => handleChangeText(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      <View style={{ paddingTop: 10, marginLeft: 50, flexDirection: 'row' }}>
        <Text style={StyleSheetVerification.codetext}>
          Didn’t receive code?
        </Text>
        <TouchableOpacity style={StyleSheetVerification.Resendcode_text}>
          <Text style={StyleSheetVerification.Resendcode_text}
            onPress={() => onPressResend()}

          >
            Resend again
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 100 }}>
        <CustomButton
          title="Verify"
          onPress={() => onPressVerify()}
          backgroundColor={primaryColors.darkblueColor}
          textColor={primaryColors.WhiteColor}
        />
      </View>

      {isModalVisible && <CustomModal
        titel={'Email Verified'}
        titeltext={'Your Email has beensuccessfully verified'}
        visible={isModalVisible}
        onContinue={() => onPresslogin()}
      />}

    </View>
  );
};

export default Verification;

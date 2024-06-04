import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetVerification = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  verificationtext: {
    color: primaryColors.lightblackColor,
    fontSize: 24,
    fontWeight: "500",
  },
  verification_otp_text: {
    color: primaryColors.grayColor,
    fontSize: 15,
    paddingTop: 10,
  },
  opt_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingTop: 20,
  },
  inputotp: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: primaryColors.borderColor,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
    margin: 5,
    padding: 5,
  },
  codetext: {
    fontSize: 16,
    color: primaryColors.darkgrayColor,
  },
  Resendcode_text: {
    color: primaryColors.darkblueColor,
    fontWeight: 'bold',
  },
});

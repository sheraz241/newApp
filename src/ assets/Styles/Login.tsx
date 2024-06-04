import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetLogin = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    height: 54,
    width: 330,
    borderWidth: 1,
    padding: 10,
    borderColor: primaryColors.borderColor,
    borderRadius: 6,
    margin: 10,
  },
  title: {
    fontSize: 30,
    color: primaryColors.darkblueColor,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 6,
    width: 240,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: primaryColors.darkblueColor,
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    color: primaryColors.WhiteColor,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textOR: {
    paddingTop: 20,
  },
  textsign: {
    color: primaryColors.darkblueColor,
    fontSize: 15,
    fontWeight: "bold",
  }
});

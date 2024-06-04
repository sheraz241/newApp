import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetSingup = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: "center",
        flex: 1,
    },
    title: {
        fontSize: 30,
        color: primaryColors.darkblackColor,
    },
    input: {
        height: 54,
        width: 240,
        borderRadius: 6,
        fontSize: 14,
    },
    inputView: {
        height: 52,
        width: 330,
        borderWidth: 1,
        borderColor: primaryColors.borderColor,
        borderRadius: 6,
    },
    textOR: {
        paddingTop: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
});

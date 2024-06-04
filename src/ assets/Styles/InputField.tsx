import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetInputField = StyleSheet.create({
    input: {
        height: 54,
        width: 330,
        borderWidth: 1,
        padding: 10,
        borderColor: primaryColors.borderColor,
        borderRadius: 6,
        margin: 10,
    },
});

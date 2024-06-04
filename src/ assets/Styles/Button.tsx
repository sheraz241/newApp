
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetButton = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    buttonContainer: {
        width: 333, 
        height: 50, 
        borderRadius: 10,
        backgroundColor: primaryColors.darkblueColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: primaryColors.WhiteColor,
        fontSize: 16,
    },
});

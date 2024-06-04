import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetModal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 24,
        color: primaryColors.darkblackColor,
    },
    titelTextmodal: {
        fontSize: 14,
        color: primaryColors.grayColor,
    },
    buttonContainer: {
        width: 200,
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

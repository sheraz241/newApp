import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetCards = StyleSheet.create({
    mainsectionCards: {
        padding: 16,
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginLeft: 15,
    },
    mainbodyCard: {
        position: 'relative',
        padding: 10,
    },
    inersectionCard: {
        flexDirection: 'column',
        backgroundColor: primaryColors.WhiteColor,
        width: 160,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    cardimge: {
        backgroundColor: "red",
        height: 140,
        width: 140,
        borderRadius: 7,
    },
    heart_box:{
      flexDirection:"row",
      flex:1,
    },
    textWrapper: {
        position: 'absolute',
        top: 17,
        left: 17,
        backgroundColor: primaryColors.blueColor,
        padding: 5,
        borderRadius: 15,
        fontSize: 8,
    },
    kmWrapper: {
        position: 'absolute',
        top: 17,
        padding: 5,
        borderRadius: 15,
        left: 100,
        backgroundColor: primaryColors.WhiteColor,
    },
    text: {
        color: '#fff',
        fontSize: 10,
        alignContent: "center",
        paddingLeft: 5,
    },
    textkm: {
        color: '#282D31',
        fontSize: 10,
        alignContent: "center",
        paddingLeft: 5,
    },
    cardtext: {
        color: primaryColors.lightblackColor,
        fontSize: 12,
        paddingTop: 5,
        width: "90%",
        fontWeight: "800",
    },
    maincharhertype: {
        flexDirection: 'row',
    },
    charhertype: {
        flexDirection: 'row',
        paddingTop: 5,
    },
    charhertypelocation: {
        flexDirection: 'row',
        paddingTop: 5,
        flex: 1,
    },
    cardtextCharger: {
        color: primaryColors.lightColor,
        fontSize: 10,
    },
    textChargerdata: {
        paddingTop: 2,
        color: primaryColors.lightblackColor,
        fontSize: 9,
    },
    cardtextprice: {
        color: primaryColors.blackColor,
        fontSize: 18,
    },
    textChargerspeed: {
        color: primaryColors.blackColor,
        fontSize: 12,
        paddingTop: 5,
    },
});
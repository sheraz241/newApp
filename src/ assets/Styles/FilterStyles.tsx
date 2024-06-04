import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetFilter = StyleSheet.create({
    Mainsection: {
        padding: 20,
    },
    InerSection: {
        marginTop: 25,
        flexDirection: "row"
    },
    InerSectiontext: {
        flex: 1,
    },
    Filtertext: {
        fontSize: 22,
        color: primaryColors.lightblackColor,
    },
    Filtersmalltext: {
        color: primaryColors.lightgraycolor,
        fontSize: 13,
        padding: 2,
    },
    MenuImage: {
        height: 46,
        width: 46,
        borderRadius: 12,
        backgroundColor: "red",
    },
    inputSearchLocation: {
        width: 240,
        height: 46,
        backgroundColor: primaryColors.WhiteSmokecolor,
        borderRadius: 11,
        padding: 15,
    },
    SearchLocationbox: {
        flexDirection: 'row',
        marginTop: 10,
    },
    FilterImage: {
        height: 46,
        width: 46,
        borderRadius: 12,
        backgroundColor: "green",
        marginLeft: 5,
    },
    NotificationBtn: {
        height: 46,
        width: 46,
        borderRadius: 12,
        backgroundColor: "yellow",
        marginLeft: 5,

    },
});

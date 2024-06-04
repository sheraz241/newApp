import { Polygon } from "react-native-maps";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetMap = StyleSheet.create({
    MainsectionMap: {
        backgroundColor: primaryColors.WhiteColor,
        margin: 30,
    },
    MaincontainerMap: {
        height: 200,
    },
    infoContainer: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: primaryColors.WhiteColor,
        padding: 10,
    },
    Maptextbox: {
        justifyContent: "space-between",
        alignContent: "center",
        fontSize: 12,
    },
    BtnMap: {
        borderRadius: 20,
        width: 96,
        height: 36,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#560cce",
    },
    btnText: {
        textAlign: "center",
        color: "#ffff",
        fontSize: 12,
    },
});

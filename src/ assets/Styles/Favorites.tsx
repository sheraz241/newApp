import { Colors } from "react-native/Libraries/NewAppScreen";
import { primaryColors } from "../color/index"
import { StyleSheet } from "react-native";
export const StyleSheetFavorites = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    Nodatatext:{
     fontSize:15,
     color:primaryColors.darkblackColor,
     textAlign:"center"
    },
    nodatatextbox:{
        justifyContent:"center",
        alignContent:"center",
        flex:1,
        alignSelf:"center",
    },
});

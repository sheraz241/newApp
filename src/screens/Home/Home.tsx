import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { primaryColors } from "../../ assets/color/index"
import Filter from './Filter'
import { StyleSheetMap } from '../../ assets/Styles/MapStyles'
import Cards from './Cards'
import { useNavigation, NavigationProp } from "@react-navigation/native";
const Home = () => {
    const navigation = useNavigation();
    const openMap = () => {
        navigation.navigate("Map")
    }
    return (
        <SafeAreaView >
            <ScrollView>
                <View>
                    <Filter />
                </View>
                <View style={primaryColors.WhiteSmokecolor}>
                    <View style={StyleSheetMap.infoContainer}>
                        <View style={StyleSheetMap.Maptextbox}>
                            <Text style={{ paddingTop: 10 }}>Find EV Chargers near You</Text>
                        </View>
                        <TouchableOpacity
                            style={StyleSheetMap.BtnMap}
                            onPress={openMap}
                        >
                            <Text style={StyleSheetMap.btnText}>Show map</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Cards />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default Home
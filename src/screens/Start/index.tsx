import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheetMap } from '../../ assets/Styles/MapStyles'
import { useNavigation, NavigationProp } from "@react-navigation/native";
const index = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView >
      <ScrollView>
        <View>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default index

import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheetFilter } from '../../ assets/Styles/FilterStyles'
import { MenuImage, SearchImage, FilterImage, NotificationBtn } from "../../ assets/Images/index";
import { MenueIcon, FilterIcon, Notification } from '../../ assets/icons';

const Filter = () => {
    const [SearchLocation, SetSearchLocation] = useState('');
    const onChangeSearchLocation = (SearchLocation) => {
        SetSearchLocation(SearchLocation)
    };
    return (
        <SafeAreaView >
            <ScrollView>
                <View style={StyleSheetFilter.Mainsection}>
                    <View style={StyleSheetFilter.InerSection}>
                        <View style={StyleSheetFilter.InerSectiontext}>
                            <Text style={StyleSheetFilter.Filtertext}>
                                Hello, Nabeel!
                            </Text>
                            <Text style={StyleSheetFilter.Filtersmalltext}>
                                Good to See you
                            </Text>
                        </View>
                        <TouchableOpacity >
                            <MenueIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={StyleSheetFilter.SearchLocationbox}>
                        <TextInput
                            style={StyleSheetFilter.inputSearchLocation}
                            onChangeText={onChangeSearchLocation}
                            value={SearchLocation}
                            placeholder="Search Location"
                        />
                        <TouchableOpacity style={{ marginLeft: 6 }}>
                            <FilterIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 6 }}>
                            <Notification />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Filter
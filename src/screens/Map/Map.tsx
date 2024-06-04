import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheetMap } from '../../ assets/Styles/MapStyles'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const GOOGLE_MAPS_APIKEY = "AIzaSyAvMJQfSi7KEWnICftMup-QuqjEcSIGgp0";
const Map = () => {
    return (
        <View >
            <View style={StyleSheetMap.MaincontainerMap}>
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        apikey={GOOGLE_MAPS_APIKEY}
                    />
                </View>
            </View>

        </View>
    )
}

export default Map
const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 340,
        alignItems: 'center',
        margin: 20,
        position: 'relative'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
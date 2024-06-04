import { View, Text, FlatList, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Heart, LocationIcon } from '../../ assets/icons';
import { StyleSheetCards } from '../../ assets/Styles/Cards';
import http from '../../http/http';
import Heartunclick from '../../ assets/icons/Heartunclick';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../ assets/Loader/loading';
import { StyleSheetFavorites } from '../../ assets/Styles/Favorites';
const Favorites = () => {
    const navigation = useNavigation();
    const [getdatacard, setGetdataCard] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = () => {
        http.get("users/get-user-likes")
            .then((response) => {
                setGetdataCard(response.data);
            })
            .catch((error) => {
                console.log("error location api", error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const onPressLiked = (id) => {
        setIsLoading(true)
        console.log("ID sent to API", id);
        let data = JSON.stringify({
            locationId: id,
        });
        http.patch('users/add-like', data)
            .then((response) => {
                fetchData()
                setIsLoading(false)
            })
            .catch((error) => {
                console.log("Like error", error);
            });
    };
    const back = () => {
        navigation.navigate("Home");
    };
    const renderItem = ({ item }) => {
        return (
            <View style={StyleSheetCards.inersectionCard}>
                <View style={StyleSheetCards.mainbodyCard}>
                    <Image
                        style={StyleSheetCards.cardimge}
                    // source={{ uri: item?.Location?.photos[0] }}
                    />
                    <TouchableOpacity style={StyleSheetCards.textWrapper}>
                        <Text style={StyleSheetCards.text}>Available</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheetCards.kmWrapper}>
                        <Text style={StyleSheetCards.textkm}>3.5km</Text>
                    </TouchableOpacity>
                    <View style={StyleSheetCards.heart_box}>
                        <Text style={StyleSheetCards.cardtext}>{item?.Location?.address}</Text>
                        <Pressable
                            onPress={() => {
                                onPressLiked(item?.Location?.id);
                            }}
                            style={{ paddingTop: 8 }}
                        >
                            <Heartunclick />
                        </Pressable>
                    </View>
                    <View style={StyleSheetCards.charhertype}>
                        <Text style={StyleSheetCards.cardtextCharger}>Charger :</Text>
                        <Text style={StyleSheetCards.textChargerdata}>{item?.Location?.chargerType}</Text>
                    </View>
                    <View style={StyleSheetCards.maincharhertype}>
                        <View style={StyleSheetCards.charhertypelocation}>
                            <Text style={StyleSheetCards.cardtextprice}>{item?.Location?.hourlyPrice}</Text>
                            <Text style={StyleSheetCards.textChargerspeed}>/hr</Text>
                        </View>
                        <TouchableOpacity>
                            <LocationIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <ScrollView keyboardShouldPersistTaps={"always"}>
            <View>
                <Text style={{ paddingLeft: 30, paddingTop: 20 }} onPress={back}> Favorites</Text>
                <View style={StyleSheetCards.mainsectionCards}>
                    {isLoading ? (
                        <Loading />
                    ) : getdatacard.length > 0 ? (
                        <FlatList
                            keyExtractor={(item) => item.id.toString()}
                            data={getdatacard}
                            numColumns={2}
                            renderItem={renderItem}
                        />
                    ) : (
                        <View style={StyleSheetFavorites.nodatatextbox}>

                            <Text style={StyleSheetFavorites.Nodatatext}>NO Date</Text>

                        </View>
                    )}
                </View>
            </View>
        </ScrollView>

    );
};

export default Favorites;

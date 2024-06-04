import { View, Text, TouchableOpacity, Image, FlatList, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Heart, LocationIcon } from '../../ assets/icons';
import Heartunclick from '../../ assets/icons/Heartunclick';
import { StyleSheetCards } from '../../ assets/Styles/Cards';
import http from '../../http/http';
import { useNavigation } from '@react-navigation/native';
const Cards = () => {
    const navigation = useNavigation();
    const [cardsData, setCardsData] = useState([]);
    const [liked, setLiked] = useState(false);
    const [likedUsers, setLikedUsers] = useState([]);
    const fetchData = () => {
        http.get('locations?latitude=33.5215749&longitude=73.0989488&radius=2000&page=1')
            .then((response) => {
                setCardsData(response?.data?.rows);
            })
            .catch((error) => {
                console.log("API error", error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const fetchUserLikes = () => {
        http.get('users/get-user-likes')
            .then((response) => {
                setLikedUsers(response.data);
                const likedLocations = response.data.reduce((acc, like) => {
                    acc[like.locationId] = true;
                    return acc;
                }, {});
                setLikedUsers(likedLocations);
            })
            .catch((error) => {
                console.log("User likes error", error);
            });
    };

    useEffect(() => {
        fetchUserLikes();
    }, []);
    const onPressLiked = (id) => {
        console.log("ID sent to API", id);
        let data = JSON.stringify({
            locationId: id,
        });

        http.patch('users/add-like', data)
            .then((response) => {
                console.log("Like response", JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log("Like error", error);
            });
    };

    const onFavorites = () => {
        navigation.navigate('Favorites');
    };

    const renderItem = ({ item }) => (
        <View style={StyleSheetCards.inersectionCard}>
            <View style={StyleSheetCards.mainbodyCard}>
                <Image style={StyleSheetCards.cardimge} />
                {/* source={{ uri: item?.photos[0] }} */}
                <TouchableOpacity style={StyleSheetCards.textWrapper}>
                    <Text style={StyleSheetCards.text}>Available</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleSheetCards.kmWrapper}>
                    <Text style={StyleSheetCards.textkm}>3.5km</Text>
                </TouchableOpacity>
                <View style={StyleSheetCards.heart_box}>
                    <Text style={StyleSheetCards.cardtext}>{item?.address}</Text>
                    <Pressable
                        onPress={() => {
                            setLiked(!liked);
                            onPressLiked(item?.id);
                            onFavorites();
                        }}
                        style={{ paddingTop: 8 }}
                    >
                        {likedUsers[item?.id] ? <Heartunclick /> : <Heart />}
                    </Pressable>
                </View>
                <View style={StyleSheetCards.charhertype}>
                    <Text style={StyleSheetCards.cardtextCharger}>Charger:</Text>
                    <Text style={StyleSheetCards.textChargerdata}>{item?.chargerType}</Text>
                </View>
                <View style={StyleSheetCards.maincharhertype}>
                    <View style={StyleSheetCards.charhertypelocation}>
                        <Text style={StyleSheetCards.cardtextprice}>${item?.hourlyPrice}</Text>
                        <Text style={StyleSheetCards.textChargerspeed}>/hr</Text>
                    </View>
                    <TouchableOpacity>
                        <LocationIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <ScrollView keyboardShouldPersistTaps={"always"}>
            <View style={StyleSheetCards.mainsectionCards}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={cardsData}
                    numColumns={2}
                    renderItem={renderItem}
                />
            </View>
        </ScrollView>
    );
};

export default Cards;

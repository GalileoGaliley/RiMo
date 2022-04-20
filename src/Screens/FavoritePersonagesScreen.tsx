// @ts-ignore
import React, {useEffect, useState} from 'react';
import {Button, Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import FavoriteItem from "../Components/FavoriteItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPersonages, fetchFewPersonages} from "../HTTP/RiM_API";
import {getDataAsyncStorage,} from "../Store/AsyncStorage";
import {AppState, PersonageList} from "../Store/types";
import TabBar from "../Components/TabBar";
import {AsyncStorage, PersonListActions} from "../Store/Control/actions";

import {styles} from '../../Styles.js';
const FavoritePersonagesScreen = ({navigation}) => {

    const local_style = styles.favoripeScreen
    const dispatcher = useDispatch()
    const store = useSelector((state:AppState)=> {
        return state.favorites
    });
    useEffect(()=>{
        getDataAsyncStorage(AsyncStorage.favoritePersonages).then(data=>{
            if (data.length){
                fetchFewPersonages(data).then((data)=>{
                    if (!data.length){
                        data = [data]
                    }
                    let response = data;
                    let persList:PersonageList =  response.map((item)=>{
                        return  {
                            id:item.id,
                            name: item.name,
                            status: item.status,
                            species:  item.species,
                            gender: item.gender,
                            origin: item.origin,
                            location: item.location,
                            image: item.image
                        }
                    });
                    dispatcher({type:PersonListActions.addFavorites, payload:persList});
                })
            }
        })
    },[])
    return (
        <>
            <View style={local_style.container}>
                <View>
                    <Text style={local_style.title}>
                        {store.length?'U like this!':'Empty'}
                    </Text>
                </View>
                <ScrollView>
                    {store.map((item, index)=>{
                        return <FavoriteItem personage={item} key={index} index={index} id={item.id} />
                    })}
                </ScrollView>
            </View>
            <TabBar navigation={navigation}/>
        </>
    );
};

export default FavoritePersonagesScreen;
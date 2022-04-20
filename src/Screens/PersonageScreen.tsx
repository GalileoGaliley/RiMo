// @ts-ignore
import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {AppState} from "../Store/types";
import {styles} from '../../Styles.js';

const PersonageScreen = ({route}) => {
    let local_style = styles.personageScreen

    const personage = route.params.personage;
    const store = useSelector((state:AppState)=> {
        return state.settings
    })
    let color = store.fontColor

    return (
        <ScrollView style={[{backgroundColor: store.back2}, local_style.container]}>
            <View style = {local_style.imageContainer}>
                <Image style={local_style.image} source={{uri: `https://rickandmortyapi.com/api/character/avatar/${personage.id}.jpeg`}}/>
            </View>
            <View style={local_style.info}>
                <View style={{width:'100%'}}>
                    <View style={[{backgroundColor:store.back2},local_style.infoList]}>
                        <Text style={[{color: color}, local_style.infoItem]}>
                            Name: {personage.name}
                        </Text>
                        <Text style={[{color: color}, local_style.infoItem]}>
                            Status: {personage.status}
                        </Text>
                        <Text style={[{color: color}, local_style.infoItem]}>
                            Gender: {personage.gender}
                        </Text>
                        <Text style={[{color: color}, local_style.infoItem]}>
                            From: {personage.origin.name}
                        </Text>
                        <Text style={[{color: color}, local_style.infoItem]}>
                            Lives in: {personage.location.name}
                        </Text>
                    </View>
                </View>



            </View>
        </ScrollView>
    );
};

export {PersonageScreen};

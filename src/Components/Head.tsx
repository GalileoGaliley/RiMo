// @ts-ignore
import React, {useContext, useState} from 'react';
import {Text,View} from "react-native";
import {useSelector} from "react-redux";
import {AppState} from "../Store/types";
import {styles} from '../../Styles.js';
export const Head = () => {
    const local_style = styles.head
    const store = useSelector((state:AppState)=> {
        return state.settings
    })
    return (
        <>
            <View style={[{backgroundColor:store.back1}, local_style.container]}>
                <View style={local_style.view}>
                    <Text style={[{color:store.fontColor},local_style.h1]}>Rick and Morty!</Text>
                    <Text style={[{color:store.fontColor},local_style.text]}>React-native test</Text>
                </View>
            </View>
        </>

    );
};

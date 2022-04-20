// @ts-ignore
import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {Setting, Home, Heart} from "../Static_images/IconRNS"
import {styles} from '../../Styles.js';

const TabBar = ({navigation}) => {
    const local_style = styles.tabBar
    let size = 30
    return (
        <View style={local_style.container}>
            <TouchableOpacity style={local_style.item} onPress={()=>{navigation.navigate("HomeScreen")}}>
                <Home width={size} height={size} />
            </TouchableOpacity>
            <TouchableOpacity style={local_style.item} onPress={()=>{navigation.navigate("SettingScreen")}}>
                <Setting width={size} height={size} />
            </TouchableOpacity>
            <TouchableOpacity style={local_style.item} onPress={()=>{navigation.navigate("FavoritePersonages")}}>
                <Heart width={size} height={size} />
            </TouchableOpacity>
        </View>
    );
};

export default TabBar;
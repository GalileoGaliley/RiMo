// @ts-ignore
import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Heart} from "../Static_images/IconRNS";
import {addToFavorite} from "../Func/base";
import {styles} from '../../Styles.js';

const PersonageItem = ({item, navigation, color}) => {
    const local_style = styles.personageItem
    return (
        <View style={local_style.container} >
            <TouchableOpacity onPress={()=>{navigation.push('PersonageScreen', {personage: item})}}>
                <Image style={local_style.image} source={{uri: item.image.toString()}}/>
            </TouchableOpacity>
            <View>
                <View style={local_style.info}>
                    <Text style={[{color: color}, local_style.text]}>
                        {item.name}
                    </Text>
                    <TouchableOpacity style={local_style.likeButton} onPress={()=>{addToFavorite(item.id)}}>
                        <Heart width={25} height={25} />
                    </TouchableOpacity>
                </View>
                <Text style={{color: color}}>
                    {item.status}
                </Text>
            </View>

        </View>
    );
};

export default PersonageItem;
// @ts-ignore
import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {AsyncStorage, PersonListActions} from "../Store/Control/actions";
import {useDispatch} from "react-redux";
import {removeDataAsyncStorage} from "../Store/AsyncStorage";
import {styles} from '../../Styles.js';
const FavoriteItem = ({personage, index, id}) => {
    const local_style = styles.favoriteItem
    const dispatcher = useDispatch()

    function deleteItem(id, index){
        removeDataAsyncStorage(AsyncStorage.favoritePersonages, id, AsyncStorage.favoritePersonages )
            .then(()=>{
                dispatcher({type:PersonListActions.removeFavorites, payload: index})
            });
    }

    return (
        <View style={local_style.item}>
            <Image  style={local_style.image} source={{uri:`https://rickandmortyapi.com/api/character/avatar/${personage.id}.jpeg`}}/>
            <View style={local_style.stats}>
                <Text style={local_style.name}>
                    {personage.name}
                </Text>
                <Text style={local_style.status}>
                    {personage.status}
                </Text>

                <Text style={{fontSize:14, color:'#555', marginTop:10}}>

                </Text>


            </View>
            <View style={local_style.deleteContainer}>
                <TouchableOpacity
                    onPress={()=>{deleteItem(id, index)}}
                    style={local_style.deleteButton}>
                    <Text style={{fontSize:20, margin:5, lineHeight:26}}>
                        УДАЛИТЬ
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default FavoriteItem;
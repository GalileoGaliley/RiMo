// @ts-ignore
import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View, Text} from "react-native";
import PersonageItem from "./PersonageItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPersonages} from "../HTTP/RiM_API";
import {AppState, PersonageList} from "../Store/types";
import {PageListAction, PersonListActions} from "../Store/Control/actions";
import { ArrowLeft, ArrowRight } from '../Static_images/IconRNS';
import Preload from "./Preload";
import Prompt from "./Prompt";
import {styles} from '../../Styles.js';


const PersonageListComponent = ({navigation}) => {
    const local_style = styles.personageList
    const [state, setState] = useState(true);
    const [preload, setPreload] = useState(false);
    const [visiblePrompt, setVisiblePrompt] = useState(false);
    const [number, onChangeNumber] = useState(1);
    const dispatcher = useDispatch()

    const store = useSelector((state:AppState)=> {
        return state
    })
    const chagePage = ()=>{
        dispatcher({type:PageListAction.changePage, payload:number});
        setPreload(false);
        setState(!state);
    }
    useEffect(()=>{
        fetchAllPersonages(store.page.page).then((data)=>{
            let response = data.results;
            dispatcher({type:PageListAction.countPage, payload:data.info.pages});
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
            dispatcher({type:PersonListActions.addPersonages, payload:persList});
            setPreload(true)
        });

    }, [state])

    return (
        <View style={[{backgroundColor: store.settings.back2}, local_style.container]}>

                <Preload />

            <Prompt
                visiblePrompt={visiblePrompt}
                setVision={setVisiblePrompt}
                onChangeNumber={onChangeNumber}
                number={number}
                chagePage={chagePage}
                maxPage={store.page.allPages}/>
        </View>
    );
};

export default PersonageListComponent;
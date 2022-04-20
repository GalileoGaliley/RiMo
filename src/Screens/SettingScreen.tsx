import {Text, View, Switch} from 'react-native';
// @ts-ignore
import React, {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { SettingAction} from "../Store/Control/actions";
import TabBar from "../Components/TabBar";
import {setDataAsyncStorage} from "../Store/AsyncStorage";
import {AppState} from "../Store/types";
import {styles} from '../../Styles.js';
export  const SettingScreen = ({ navigation, route }, props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    let local_style = styles.settingScreen
    const toggleSwitch = ()=>{
        setIsEnabled(previousState => !previousState);
    }
    const dispatcher = useDispatch()

    const store = useSelector((state:AppState)=> {
        return state
    })
    useEffect(()=>{
        if (isEnabled){
            dispatcher({type:SettingAction.theme, payload:{
                    fontColor:'#f6eeda',
                    back1:'#3d3d3d',
                    back2:'#555555',
                    lightMode:'dark'
                }});
        }else {
            dispatcher({type:SettingAction.theme, payload:{
                    fontColor:'#3b3b3b',
                    back1:'#cecece',
                    back2:'#ececec',
                    lightMode:'light'
                }});

        }
        setDataAsyncStorage('lightMode', store.settings);
    }, [isEnabled])


    return (
        <>
            <View style={{backgroundColor: store.settings.back2, color: store.settings.fontColor, height:'100%'}}>
                <View style={[{backgroundColor: store.settings.back2, color: store.settings.fontColor},local_style.container]}>
                    <Text style={{fontSize: 30, color: store.settings.fontColor,}}>Settings!</Text>
                </View>
                <View style={[{backgroundColor: store.settings.back2,},local_style.fields]}>
                    <View style={{backgroundColor: store.settings.back2, color: store.settings.fontColor,}}>
                        <Text style={{fontSize: 25, color: store.settings.fontColor,}}>
                            Theme
                        </Text>
                        <View>
                            <Switch
                                trackColor={{ false: "#3f3c3c", true: "#d4d4d5" }}
                                thumbColor={isEnabled ? "#fafa06" : "#a25300"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>


            </View>
            <TabBar navigation={navigation}/>
        </>


    );
};

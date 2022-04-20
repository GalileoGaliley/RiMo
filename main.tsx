// @ts-ignore
import React from 'react';
import {HomeScreen} from "./src/Screens/HomeScreen";
import {Head} from "./src/Components/Head";
import {PersonageScreen} from "./src/Screens/PersonageScreen";
import {SettingScreen} from "./src/Screens/SettingScreen";
import FavoritePersonagesScreen from "./src/Screens/FavoritePersonagesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {checkDataInAsyncStorage, getDataAsyncStorage} from "./src/Store/AsyncStorage";
import {SettingAction} from "./src/Store/Control/actions";
import {StatusBar, View,} from 'react-native';
import {useDispatch} from "react-redux";
const Stack = createNativeStackNavigator();
const Main = () => {
    const dispatcher = useDispatch()
    checkDataInAsyncStorage("lightMode").then((data)=>{
        if (data){
            getDataAsyncStorage("lightMode").then((data)=>{
                dispatcher({action: SettingAction.theme, payload: data})
            })
        }
    });
    return (
        <NavigationContainer>
            <StatusBar hidden={true}/>
            <View style={{height:'100%', width:'100%', position:'relative'}}>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{header: ()=><Head />}}/>
                    <Stack.Screen name="PersonageScreen" component={PersonageScreen} />
                    <Stack.Screen name="SettingScreen" component={SettingScreen} options={{header: ()=><Head />}}/>
                    <Stack.Screen name="FavoritePersonages" component={FavoritePersonagesScreen} options={{header: ()=><Head />}} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
};

export default Main;
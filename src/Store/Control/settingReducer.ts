import {SettingState} from "../types";
import {SettingAction} from "./actions";

export const initialStateSetting:SettingState = {
    fontColor:'#3f3f3f',
    back1:'#fff',
    back2:'#e7e7e7',
    fontSize: 20,
    lightMode: 'light'
};

export const SettingReducer = (state:SettingState = initialStateSetting, action) =>{
    switch (action.type) {
        case SettingAction.changeFontSize:
            return {
                fontColor:state.fontColor,
                back1:state.back1,
                back2:state.back2,
                fontSize: action.payload,
                lightMode: state.lightMode
            }
        case SettingAction.theme:
            console.log(action.payload)
            return {
                fontColor:action.payload.fontColor,
                back1:action.payload.back1,
                back2:action.payload.back2,
                fontSize: state.fontSize,
                lightMode: action.payload.lightMode
            }
        default:
            return state
    }
}
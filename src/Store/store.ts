import { combineReducers, createStore } from 'redux';
import { AppState } from './types';
import {PageReducer} from "./Control/reducer";
import {PersonageListReducer} from "./Control/personageReducer";
import {FavoriteListReducer} from "./Control/favoriteReducer";
import {SettingReducer} from "./Control/settingReducer";

export const rootReducer = combineReducers<AppState>({
    personages:PersonageListReducer,
    favorites: FavoriteListReducer,
    page:PageReducer,
    settings: SettingReducer,
})
export const store = createStore(rootReducer);
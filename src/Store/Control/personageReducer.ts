import {PersonListActions} from "./actions";
import {PersonageList} from "../types";

const initialStatePersonages:PersonageList = [];
export const PersonageListReducer = (state= initialStatePersonages, action) => {
    switch (action.type){
        case PersonListActions.addPersonages:
            return action.payload
        default:
            return state;
    }
}
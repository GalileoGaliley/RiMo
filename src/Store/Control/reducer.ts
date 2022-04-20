import {PageState} from "../types";
import {PageListAction} from "./actions";

const initialStatePages:PageState = {
    page:1,
    allPages:0
};
export const PageReducer = (state:PageState = initialStatePages, action) =>{
    switch (action.type) {
        case PageListAction.secondPage:
            return {
                page: state.page += 1,
                allPages: state.allPages
            }
        case PageListAction.previousPage:
            return {
                page: state.page -=1,
                allPages: state.allPages
            }
        case PageListAction.countPage:
            return {
                page: state.page,
                allPages: action.payload
            }
        case PageListAction.changePage:
            return {
                page: action.payload,
                allPages: state.allPages
            }
        default:
            return state
    }
}
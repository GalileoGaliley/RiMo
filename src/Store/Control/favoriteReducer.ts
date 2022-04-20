import {PersonListActions} from "./actions";

export const FavoriteListReducer = (state= [], action) => {
    switch (action.type){
        case PersonListActions.addFavorites:

            return action.payload;
        case PersonListActions.removeFavorites:
            let newState = state.slice(0);
            newState.splice(action.payload, 1);
            return newState;
        default:
            return state;
    }
}
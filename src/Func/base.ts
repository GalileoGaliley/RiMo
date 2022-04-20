import {checkDataInAsyncStorage, setDataAsyncStorage} from "../Store/AsyncStorage";
import {AsyncStorage} from "../Store/Control/actions";

export const addToFavorite = async (id)=>{
    checkDataInAsyncStorage(AsyncStorage.favoritePersonages)
        .then((data)=>{
            if (!data){
                setDataAsyncStorage(AsyncStorage.favoritePersonages, []);
            }
            setDataAsyncStorage(AsyncStorage.favoritePersonages, id,AsyncStorage.favoritePersonages)
        });

}
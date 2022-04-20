import Storage from "react-native-storage";
import {AsyncStorage} from 'react-native';

const storage = new Storage({
        size: 1000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
        sync: {

        }
});

export const getDataAsyncStorage = async (key:string)=>{
        let data = await AsyncStorage.getItem(key);
        return JSON.parse(data);
}

export const setDataAsyncStorage = async (key:string, value:any, list?:string)=>{
        let data;
        let item;
        if (list){
                data = await AsyncStorage.getItem(list);
                data = JSON.parse(data);
                data.push(value);
                item = JSON.stringify(data);
        }else {
                item = JSON.stringify(value)
        }

        await AsyncStorage.setItem(key, item);
        return
}
export const removeDataAsyncStorage = async (key:string, value:number, list?:string)=>{
        let data;
        let item;
        data = await AsyncStorage.getItem(list);
        data = JSON.parse(data);
        let pos = data.indexOf(value);
        data.splice(pos ,1)
        item = JSON.stringify(data);


        await AsyncStorage.setItem(key, item);
        return
}
export const clearDataAsyncStorage = async (key:string)=>{

        await AsyncStorage.clear()
        let data = await AsyncStorage.getItem(key);
        console.log(data)
        return
}
export const checkDataInAsyncStorage = async (key:string)=>{
        let data = await AsyncStorage.getItem(key);
        if(data){
                console.log("I Find")
                console.log(data)
                return true
        }else {
                console.log("I no Find")
                console.log(data)
                return false
        }

}
export default storage;
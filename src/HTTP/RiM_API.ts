import { $host} from './index'



export const fetchAllPersonages = async (page:number) =>{
    const {data} = await $host.get('character',{params:{page: page}});
    return data;
};
export const fetchFewPersonages = async (ids:number[]) =>{
    const {data} = await $host.get(`character/${ids}`,);
    return data;
};
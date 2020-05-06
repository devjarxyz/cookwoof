import { IBrewdogAPIHandler } from "./IBrewdogAPIHandler";
import axios, { AxiosError } from 'axios';
import { brewBase, brewDataNames } from "./base";
import { Beer } from "../data/beers/types";

export const brewdogAPI: IBrewdogAPIHandler = {
    getAllBeers: async ()  => {
        let url = `${brewBase}${brewDataNames.beers}`;
        let result = await axios.get(url).then((response: any) => {
            
            let resData: Beer[] = response.data;
            return resData;
        
        }).catch((error: AxiosError) => {
            return Promise.reject(error.message);
        })
        return result;
       
    },
    getFoodBeers: async (food: string) => {
        let url = `${brewBase}${brewDataNames.beers}?${brewDataNames.food}${food}`;
        let result = await axios.get(url).then((response: any) => {
            let resData: Beer[] = response.data;
            return resData;
        
        }).catch((error: AxiosError) => {
            return Promise.reject(error.message);
        })

        return result;
    } 
}
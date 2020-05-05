import { IBrewdogAPIHandler } from "./IbrewdogAPIHandler";

export const brewdogAPI: IBrewdogAPIHandler = {
    getAllBeers: ()  => {
        return Promise.reject('stuff');
    },
    getFoodBeers: (food: string) => {
        return Promise.reject('stuff');
    } 
}
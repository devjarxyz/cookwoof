
export interface IBrewdogAPIHandler {
    getAllBeers(): Promise<any>;
    getFoodBeers(food: string): Promise<any>;
}
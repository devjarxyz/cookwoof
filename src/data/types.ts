export enum BrewdogBeersTypes {
    GET_ALL_BEERS_REQUEST = 'brewdog/get_all_beers_request',
    GET_ALL_BEERS_SUCCESS = 'brewdog/get_all_beers_success',
    GET_ALL_BEERS_ERROR = 'brewdog/get_all_beers_error',
    GET_FOOD_BEERS_REQUEST = 'brewdog/get_food_beers_request',
    GET_FOOD_BEERS_SUCCESS = 'brewdog/get_food_beers_success',
    GET_FOOD_BEERS_ERROR = 'brewdog/get_food_beers_error'
}

export enum BrewdogFoodBeersTypes {
   
}

export interface BrewdogAllBeersRequestAction {
    type: BrewdogBeersTypes.GET_ALL_BEERS_REQUEST;
}

export interface BrewdogAllBeersSuccessAction {
    type: BrewdogBeersTypes.GET_ALL_BEERS_SUCCESS;
    payload: {
        beers: any[];
    };
};
export interface BrewdogAllBeersErrorAction{
    type: BrewdogBeersTypes.GET_ALL_BEERS_ERROR;
    payload: {
        error: any;
    }
};

export interface BrewdogFoodBeersRequestAction {

    type: BrewdogBeersTypes.GET_FOOD_BEERS_REQUEST;
    paylod: {
        food: string;
    };
    
};

export interface BrewdogFoodBeersSuccessAction {
    type: BrewdogBeersTypes.GET_FOOD_BEERS_SUCCESS;
    payload: {
        beers: any[];
    };
};

export interface BrewdogFoodBeersErrorAction {
    type: BrewdogBeersTypes.GET_FOOD_BEERS_ERROR;
    payload: {
        error: any;
    };
};


export interface Beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: UnitData;
    boil_volume: UnitData;
    method: {
      mash_temp: [
        {
          temp: UnitData;
          duration: number;
        }
      ],
      fermentation: {
        temp: UnitData;
      },
      twist: any
    };
    ingredients: {
      malt: IngredientsData[];
      hops: IngredientsData[];
      yeast: string;
    },
    food_pairing: string[],
    brewers_tips: string;
    contributed_by: string;
}

export interface UnitData {
    value: number;
    unit: string;
}

export interface IngredientsData {
    
    name: string;
    amount: UnitData;
    add?: string;
    attribute?: string;
       
}

export type BrewdogTypes = BrewdogAllBeersRequestAction | BrewdogAllBeersSuccessAction | BrewdogAllBeersErrorAction |
                            BrewdogFoodBeersRequestAction | BrewdogFoodBeersSuccessAction | BrewdogFoodBeersErrorAction;

/**
 * A more generic way to check, for future scaling, type-guarding with ts is rather nice
 */
export const GetBrewdogTypes = <T extends BrewdogTypes>(element: any, type: BrewdogBeersTypes): element is T => {
    return element && element.type && element.type === type;
}
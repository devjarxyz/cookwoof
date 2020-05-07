import { 
    BrewdogBeersTypes, Beer, BrewdogAllBeersRequestAction, 
    BrewdogFoodBeersRequestAction, BrewdogFoodBeersSuccessAction, 
    BrewdogFoodBeersErrorAction, 
    BrewdogAllBeersSuccessAction,
    BrewdogAllBeersErrorAction,
    TabTypes,
    SetCurrentTabAction,
    AddBeerAction,
    RemoveBeerAction,
    PlusBeerAction,
    MinusBeerAction, 
} from './types';


export const getAllBeersSuccess = ({items}: {items: Beer[]}): BrewdogAllBeersSuccessAction => ({
    type: BrewdogBeersTypes.GET_ALL_BEERS_SUCCESS,
    payload: {
        beers: items
    }
});

export const getAllBeersError = ({error}: any): BrewdogAllBeersErrorAction => ({
    type: BrewdogBeersTypes.GET_ALL_BEERS_ERROR,
    payload: {
        error
    }
});

export const getAllBeersRequest = (): BrewdogAllBeersRequestAction => ({
    type: BrewdogBeersTypes.GET_ALL_BEERS_REQUEST
});


export const getFoodBeersSuccess = ({items}: {items: Beer[]}): BrewdogFoodBeersSuccessAction => ({
    type: BrewdogBeersTypes.GET_FOOD_BEERS_SUCCESS,
    payload: {
        beers: items
    }
});

export const getFoodBeersError = ({error}: any): BrewdogFoodBeersErrorAction => ({
    type: BrewdogBeersTypes.GET_FOOD_BEERS_ERROR,
    payload: {
        error
    }
});

export const getFoodBeersRequest = (food: string): BrewdogFoodBeersRequestAction => ({
    type: BrewdogBeersTypes.GET_FOOD_BEERS_REQUEST,
    payload: {
        food
    }
});

export const setCurrentTab = (tab: TabTypes): SetCurrentTabAction => ({
    type: BrewdogBeersTypes.SET_CURRENT_TAB_REQUEST,
    payload: {
        tab
    }
});

export const addTheBeer = (beer: Beer): AddBeerAction => ({
    type: BrewdogBeersTypes.ADD_BEER_REQUEST,
    payload: {
        beer
    }
});

export const removeTheBeer = (beer: Beer): RemoveBeerAction => ({
    type: BrewdogBeersTypes.REMOVE_BEER_REQUEST,
    payload: {
        beer
    }
});
export const plusMoreBeer = (beer: Beer): PlusBeerAction => ({
    type: BrewdogBeersTypes.PLUS_BEER_REQUEST,
    payload: {
        beer
    }
});

export const minusLessBeer = (beer: Beer): MinusBeerAction => ({
    type: BrewdogBeersTypes.MINUS_BEER_REQUEST,
    payload: {
        beer
    }
});
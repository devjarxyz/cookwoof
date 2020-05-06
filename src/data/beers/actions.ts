import { 
    BrewdogBeersTypes, Beer, BrewdogAllBeersRequestAction, 
    BrewdogFoodBeersRequestAction, BrewdogFoodBeersSuccessAction, 
    BrewdogFoodBeersErrorAction, 
    BrewdogAllBeersSuccessAction,
    BrewdogAllBeersErrorAction
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
})

export const getFoodBeersError = ({error}: any): BrewdogFoodBeersErrorAction => ({
    type: BrewdogBeersTypes.GET_FOOD_BEERS_ERROR,
    payload: {
        error
    }
})

export const getFoodBeersRequest = (food: string): BrewdogFoodBeersRequestAction => ({
    type: BrewdogBeersTypes.GET_FOOD_BEERS_REQUEST,
    payload: {
        food
    }
})
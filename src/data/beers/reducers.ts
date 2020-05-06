import { BrewdogTypes, Beer, BrewdogBeersTypes } from './types';

const INITAL_STATE: brewdogState = {
    items: [],
    loading: false,
    error: ''
}

const beersReducer = (state = INITAL_STATE, action: BrewdogTypes): brewdogState => {
    switch (action.type) {
        case BrewdogBeersTypes.GET_ALL_BEERS_REQUEST: {
            return {
                ...state, 
                loading: true,
                error: undefined
            }
        }
        case BrewdogBeersTypes.GET_ALL_BEERS_SUCCESS: {
            let items = action.payload.beers;
            return {
                ...state,
                loading: false,
                items,
                error: undefined
            }
        }
        case BrewdogBeersTypes.GET_ALL_BEERS_ERROR: {
            let error = action.payload.error;
            return {
                ...state,
                error
            }
        }
        case BrewdogBeersTypes.GET_FOOD_BEERS_REQUEST: {
            return {
                ...state, 
                loading: true,
                error: undefined
            }
        }
        case BrewdogBeersTypes.GET_FOOD_BEERS_SUCCESS: {
            let items = action.payload.beers;
            return {
                ...state,
                loading: false,
                items,
                error: undefined
            }
        }
        case BrewdogBeersTypes.GET_FOOD_BEERS_ERROR: {
            let error = action.payload.error;
            return {
                ...state,
                error
            }
        }
        default: 
            return INITAL_STATE;
    }
}

export interface brewdogState {
    items: Beer[];
    loading: boolean;
    error?: any;
}

export default beersReducer;
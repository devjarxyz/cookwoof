import { BrewdogTypes, Beer, BrewdogBeersTypes, TabTypes, Cart } from './types';

const INITAL_STATE: brewdogState = {
    items: [],
    loading: false,
    error: '',
    currentTab: TabTypes.BREWDOG_TAB,
    cart: []

}

const beersReducer = (state = INITAL_STATE, action: BrewdogTypes ): brewdogState => {
    
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
        case BrewdogBeersTypes.SET_CURRENT_TAB_REQUEST: {
       
            return {
                ...state,
                currentTab: action.payload.tab
            }
        }
        case BrewdogBeersTypes.ADD_BEER_REQUEST: {
            return {
                ...state,
                cart: [{
                    beer: action.payload.beer,
                    amount: 1
                }]
            }
        }
        case BrewdogBeersTypes.REMOVE_BEER_REQUEST: {
            return {
                ...state,
                cart: INITAL_STATE.cart
            }
        }
        case BrewdogBeersTypes.PLUS_BEER_REQUEST: {
            let newCart = [...state.cart];
            let beerToChangeIndex = newCart.findIndex(item => item.beer.id === action.payload.beer.id);
            if(beerToChangeIndex > -1) {
                newCart[beerToChangeIndex].amount +=  1;
                return {
                    ...state,
                    cart: newCart
                }
            }   

            
        }
        case BrewdogBeersTypes.MINUS_BEER_REQUEST: {
            let newCart = [...state.cart];
            let beerToChangeIndex = newCart.findIndex(item => item.beer.id === action.payload.beer.id);
            if(beerToChangeIndex > -1) {
                newCart[beerToChangeIndex].amount -= 1;
                if(newCart[beerToChangeIndex].amount < 1) {
                    return {
                        ...state,
                        cart: INITAL_STATE.cart
                    }
                }
                return {
                    ...state,
                    cart: newCart
                }
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
    currentTab: TabTypes;
    cart: Cart[]
}



export default beersReducer;
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import beersReducer, { brewdogState } from './beers/reducers';

export interface ApplicationState {
    readonly brewdogBeers: brewdogState;
    readonly router: RouterState; 
}

const createRootReducer = (history: History) => combineReducers<ApplicationState>({
    router: connectRouter(history),
    brewdogBeers: beersReducer
});

export default createRootReducer;
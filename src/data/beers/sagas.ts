import { takeEvery, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

import { brewdogAPI } from '../../services/brewdogAPI';
import { Beer, BrewdogFoodBeersRequestAction, BrewdogBeersTypes } from './types';

function* getAllBeers() {
    try {
        const result: Beer[] = yield call(brewdogAPI.getAllBeers);
        yield put(actions.getAllBeersSuccess({items: result}));
    } catch (error) {
        console.log(error);
    }
}

function* getFoodBeers(action: BrewdogFoodBeersRequestAction) {
    try {
        const result: Beer[] = yield call(brewdogAPI.getFoodBeers, action.payload.food);
        yield put(actions.getFoodBeersSuccess({items: result}));
    } catch (error) {
        console.log(error);
    }
}

function* watchGetAllBeersRequest() {
    yield takeLatest(BrewdogBeersTypes.GET_ALL_BEERS_REQUEST, getAllBeers);
}

function* watchGetFoodBeersRequest() {
    yield takeLatest(BrewdogBeersTypes.GET_FOOD_BEERS_REQUEST, getFoodBeers);
}

const brewdogSagas = [
    fork(watchGetAllBeersRequest),
    fork(watchGetFoodBeersRequest)
];

export default brewdogSagas;
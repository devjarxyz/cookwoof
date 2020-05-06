import brewdogSagas from './beers/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...brewdogSagas
    ])
}
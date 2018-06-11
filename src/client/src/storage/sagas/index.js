import { fork } from 'redux-saga/effects';

import { mongoDB } from './mongoDB';

export function* sagas() {
    yield fork( mongoDB );
}
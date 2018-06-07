import { fork } from 'redux-saga/effects';

import { indexedDB } from './indexedDB';
import { mongoDB } from './mongoDB';

export function* sagas() {
    yield fork( indexedDB );
    yield fork( mongoDB );
}
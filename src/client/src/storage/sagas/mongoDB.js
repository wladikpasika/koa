import { takeEvery, put } from 'redux-saga/effects';

import { 
    putTasksHandler, 
    removeTasksHandler, 
    updateTasksHandler, 
    updateTasksStatusHandler, 
    handleUploadCashedTask 
} from  '../../mongoDb/';

import { 
    ADD_TODO, 
    REMOVE_TODO, 
    EDIT_TODO, EDIT_STATUS, 
    UPLOAD_CASHED_TASKS 
} from '../actions/actionsTypes';

function* handleAdd (action = {}) {
    const { task = {}, keyForTask } = action;
    putTasksHandler( {[keyForTask]: task} );
};

function* handleRemove (action = {}) {
    const { key } = action;
    removeTasksHandler( key );
};

function* handleUpdate (action = {}) {
    const { keyEditedTask, title, description } = action;
    const key = keyEditedTask;
    updateTasksHandler( key, title, description );
};

function* handleUpdateStatus (action = {}) {
    const { newStatus, keyEditedStatus } = action;
    updateTasksStatusHandler( keyEditedStatus, newStatus );
};

export const mongoDB = function* () {
    yield takeEvery( ADD_TODO, handleAdd );
    yield takeEvery( REMOVE_TODO, handleRemove ); 
    yield takeEvery( EDIT_TODO, handleUpdate );
    yield takeEvery( EDIT_STATUS, handleUpdateStatus );
};

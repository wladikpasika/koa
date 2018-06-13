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
    ADD_TODO_IN_DB,

    REMOVE_TODO,
    REMOVE_TODO_FROM_DB,

    EDIT_TODO,
    EDIT_TODO_IN_DB,

    EDIT_STATUS,
    EDIT_STATUS_IN_DB,

    UPLOAD_CASHED_TASKS 
} from '../actions/actionsTypes';

function* handleAddInDb ( action = {} ) {
    const { task = {} } = action;
    const { data } = yield putTasksHandler(  task  );
    const { _id } = data; 
    yield put({ type: ADD_TODO, task: data, keyForTask: _id });
};

function* handleRemove (action = {}) {
    const { key } = action;
    const { data } = yield removeTasksHandler( key );
    
    if( data.deleted ){
        return yield put({ type: REMOVE_TODO, key });
    }
};

function* handleUpdate (action = {}) {
    const { keyEditedTask, title, description } = action;
    const { data } = yield updateTasksHandler( keyEditedTask, title, description );

    if( data.title ){
        const { title, description, _id } = data;
        return yield put({ type: EDIT_TODO, title, description, keyEditedTask:_id });
    }
};

function* handleUpdateStatus (action = {}) {
    const { newStatus, keyEditedStatus } = action;
    const { data } = yield updateTasksStatusHandler( keyEditedStatus, newStatus );
    
    if( data.status ){
        const { status,_id } = data;
        return yield put({  type: EDIT_STATUS, newStatus: status, keyEditedStatus:_id });
    }
    
};

export const mongoDB = function* () {
    yield takeEvery( ADD_TODO_IN_DB, handleAddInDb );
    yield takeEvery( REMOVE_TODO_FROM_DB, handleRemove ); 
    yield takeEvery( EDIT_TODO_IN_DB, handleUpdate );
    yield takeEvery( EDIT_STATUS_IN_DB, handleUpdateStatus );
};

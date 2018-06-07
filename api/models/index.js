import monk from 'monk';

import config from '../../config/connection';
import { getAllTasks, setOneTask, removeOneTask, updateOneTask, updateTaskStatus } from './Tasks';


const db = monk( config )

db.then(() => {
    console.log('Connected correctly to server');
});

export const getTasks = () => {
    return getAllTasks( db );
};

export const createTask = ( data ) => {
    return setOneTask( data, db );
};

export const removeTask = ( key ) => {
    return removeOneTask( key, db );
};

export const updateTask = ( key, data ) => {
    return updateOneTask(  key, data, db );
};

export const updateStatus = ( key, status ) => {
    return updateTaskStatus(  key, status, db );
};

import { taskModel } from './Tasks';

export const getTasks = () => {
    return taskModel.getAllTasks();
};

export const createTask = ( document ) => {
    return taskModel.setOneTask( document );
};

export const removeTask = ( key ) => {
    return taskModel.removeOneTask( key );
};

export const updateTask = ( key, data ) => {
    return taskModel.updateOneTask(  key, data );
};

export const updateStatus = ( key, status ) => {
    return taskModel.updateTaskStatus(  key, status );
};

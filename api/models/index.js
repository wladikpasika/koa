import { taskModel } from './Tasks';

const {
        getAllTasks, 
        setOneTask, 
        removeOneTask, 
        updateOneTask, 
        updateTaskStatus 
      } = taskModel;

export const getTasks = () => {
    return getAllTasks();
};

export const createTask = ( document ) => {
    return setOneTask( document );
};

export const removeTask = ( key ) => {
    return removeOneTask( key );
};

export const updateTask = ( key, data ) => {
    return updateOneTask(  key, data );
};

export const updateStatus = ( key, status ) => {
    return updateTaskStatus(  key, status );
};


// const { taskId, name } = ctx.request.body;
// const task = await tasks.findOne({ _id: taskId });
// await tasks.update({ ...task, name });

// const { taskId } = ctx.request.body;
// await tasks.remove({ _id: taskId });
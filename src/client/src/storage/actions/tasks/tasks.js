import {
    ADD_TODO,
    ADD_TODO_IN_DB,

    REMOVE_TODO,
    REMOVE_TODO_FROM_DB,

    EDIT_TODO,
    EDIT_TODO_IN_DB,

    EDIT_STATUS,
    EDIT_STATUS_IN_DB,
    UPLOAD_CASHED_TASKS,
 } from '../actionsTypes';

  
export const addTodo = (task, keyForTask) => {
    return { type: ADD_TODO, task, keyForTask }
  };

export const addTodoInDB = (task, keyForTask) => {
    return { type: ADD_TODO_IN_DB, task, keyForTask }
  };

export const removeTodo = ( key ) => {
     return { type: REMOVE_TODO, key }
 };

 export const removeTodoFromDb = ( key ) => {
    return { type: REMOVE_TODO_FROM_DB, key }
};


export const editTodo = ( title, description, keyEditedTask ) => {
    return { type: EDIT_TODO, title, description, keyEditedTask }
};

export const editTodoInDB = ( title, description, keyEditedTask ) => {
    return { type: EDIT_TODO_IN_DB, title, description, keyEditedTask }
};

export const editStatus = ( newStatus, keyEditedStatus ) => {
    return { type: EDIT_STATUS, newStatus, keyEditedStatus }
};

export const editStatusInDB = ( newStatus, keyEditedStatus ) => {
    return { type: EDIT_STATUS_IN_DB, newStatus, keyEditedStatus }
};

export const uploadCashedTasks = ( cashedTasks ) => {
    return { type: UPLOAD_CASHED_TASKS, cashedTasks }
};

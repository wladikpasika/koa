import axios from 'axios';
import axiosConfig from './axiosConfig';

export const updateTasksStatusHandler =  (key = '', status = 'todo') => { 
        axiosConfig.url = '/api/task/update-status';
        axiosConfig.data = { key, status };

        axios( axiosConfig )
        .then(resolve => console.log(resolve, 'resolve'))
        .catch(err => console.log(err)
    );
}
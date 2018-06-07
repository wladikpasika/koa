import axios from 'axios';
import axiosConfig from './axiosConfig';

export const updateTasksHandler =  (key = '', title = '', description = '') => { 
        axiosConfig.url = '/api/task/update';
        axiosConfig.data = { key, title, description };

        axios( axiosConfig )
        .then(resolve => console.log(resolve, 'resolve'))
        .catch(err => console.log(err)
    );
}
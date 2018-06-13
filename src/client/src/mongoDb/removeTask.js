import axios from 'axios';
import axiosConfig from './axiosConfig';

export const removeTasksHandler =  key => { 
        axiosConfig.url = '/api/task/remove';
        axiosConfig.data = { keyDeletedTask: key };

       return axios( axiosConfig );
}
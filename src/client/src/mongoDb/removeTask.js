import axios from 'axios';
import axiosConfig from './axiosConfig';

export const removeTasksHandler =  key => { 
        axiosConfig.url = '/api/task/remove';
        axiosConfig.data = { keyDeletedTask: key };

        axios( axiosConfig )
        .then(resolve => console.log(resolve, 'resolve'))
        .catch(err => console.log(err)
    );
}
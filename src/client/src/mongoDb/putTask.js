import axios from 'axios';
import axiosConfig from './axiosConfig';

export const putTasksHandler =  data => { 
    axiosConfig.url = '/api/task/create';
    axiosConfig.data = data;
    
    axios( axiosConfig )
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err)
);
}

import axios from 'axios';
import axiosConfig from './axiosConfig';

export const handleUploadCashedTask =  () => {
   const newAxiosConfig =  {...axiosConfig};
   newAxiosConfig.method = 'get';
   newAxiosConfig.url = '/api/task/all';
    return axios( newAxiosConfig );
}
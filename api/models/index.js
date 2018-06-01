import db from '../../config/connection';
import { getAllUsers, setOneUser } from './Users';

db.then(() => {
    console.log('Connected correctly to server');
});

export const getUsers = () => {
    return getAllUsers( db );
};

export const setUser = ( user ) => {
    return setOneUser( user, db );
};
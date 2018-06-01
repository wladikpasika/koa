import { setUser } from '../models/index';

const controllers = {
    setUser: async ( ctx, next ) => {
     const query = ctx.decodedQuerystring;
     const { request } = ctx;
     const user = request.query;
       const responce =  await setUser( user );
       ctx.redirect('/');
    }

};

export default controllers;
import { getUsers } from '../models/index';

const viewControllers = {
  getUsers:async( ctx,  next) => {
    const { request } = ctx;
    let responceText;
    try {
      responceText = await getUsers().catch(err => {console.error(err)});
    }
    catch (error) {
      console.error(error);
      resonceText ='Oops, some error';
    }
    ctx.body = JSON.stringify( responceText );
    },
};

export default viewControllers;
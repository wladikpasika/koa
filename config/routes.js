import Router from 'koa-router';
import viewControllers from '../api/controllers/viewControllers';
import controllers from '../api/controllers/controllers';

const router = new Router();

router.get('/', async (ctx, next) => {
  const { getUsers } = viewControllers;
    return getUsers( ctx, next );
});

router.get('/new-user', async (ctx, next) => {
  const { setUser } = controllers;
  const { request } = ctx;
    if(request.querystring){
        return setUser( ctx, next );
    }
    next();
});

export default router;
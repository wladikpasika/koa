import Router from 'koa-router';

import create from './create';
import remove from './remove';
import update from './update';
import updateStatus from './updateStatus';
import list from './list';

export default function configureRouter() {
  const router = new Router({ prefix: '/task' });

  router.get('/all', ( ctx, next ) => list(ctx, next) );
  router.post('/create', ( ctx, next ) => create(ctx, next) );
  router.post('/remove', ( ctx, next ) => remove(ctx, next) );
  router.post('/update', ( ctx, next ) => update(ctx, next) );
  router.post('/update-status', ( ctx, next ) => updateStatus(ctx, next) );
  
  return router;
};


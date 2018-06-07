import Router from 'koa-router';

import configureTaskRouter from './tasks';

export  function configureRouter() {
    const router = new Router({ prefix: '/api'} );
    const taskRouter = configureTaskRouter();

    router.use(taskRouter.routes()).use(taskRouter.allowedMethods() );
    return router;    
}
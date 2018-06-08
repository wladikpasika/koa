import { removeTask } from '../../models';

export default async (ctx, next) => {
     const postBody = ctx.request.body;
     const { keyDeletedTask } = postBody;
     if (!keyDeletedTask ){
        return ctx.body="Empty Key";
     }
     const removedTask =  await removeTask( keyDeletedTask ).catch(err => err);
     return ctx.body = removedTask;
}
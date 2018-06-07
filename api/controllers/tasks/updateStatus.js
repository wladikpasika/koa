import { updateStatus } from '../../models';

export default async (ctx, next) => {
    
    const postBody = ctx.request.body;
    const { key = null, status = 'todo' } = postBody;
    const updatedTaskStatus =  await updateStatus( key, status ).catch(err => err);
    return ctx.body = updatedTaskStatus;
}
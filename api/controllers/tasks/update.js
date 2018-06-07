import { updateTask } from '../../models';

export default async (ctx, next) => {
    const postBody = ctx.request.body;
    const { key, title='', description='' } = postBody;
    const updatedData = { title, description}
    const updatedTask =  await updateTask( key, updatedData ).catch(err => err);
    return ctx.body = updatedTask;
}
import { createTask } from '../../models';

export default async ( ctx, next ) => {
        const postBody = ctx.request.body;
        const { title = '', description = '', status = '', time = '', deleted = 0} = postBody;

     if(!title||!status||!time){
        return ctx.body = "Some field is empty!"
     }
        const task = { title, description, status, time, deleted };
        const addedTasks =  await createTask( task  );
        return ctx.body = addedTasks;
    };
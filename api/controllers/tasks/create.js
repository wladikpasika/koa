import { createTask } from '../../models';

export default async ( ctx, next ) => {
     const postBody = ctx.request.body;
     const key = Object.keys(postBody)[0]; console.log(key);
     const { title = '', description = '', status = '', time = '' } = postBody[key];
     const task = { title, description, status, time, id:key };
  
     const addedTasks =  await createTask( task  );
     return ctx.body = addedTasks;
    };
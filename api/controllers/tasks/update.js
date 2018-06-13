import { updateTask } from '../../models';

export default async (ctx, next) => {
    const postBody = ctx.request.body;
    const { key, title='', description='' } = postBody;

    if ( !key || !title ){
        return ctx.body="Empty fiels";
     }
     
    const updatedData = { title, description};

    try {
        const updatedTask =  await updateTask( key, updatedData );
        console.log( updatedTask );
        return ctx.body = updatedTask;
    }
    catch(err){
        console.log(err);
        return err;
    }
    
}
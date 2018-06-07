import { getTasks } from '../../models/index';

export default async (ctx, next) => {
  const { request } = ctx;
  let responceText;
    try { 
      responceText = await getTasks().catch(err => {console.error(err)});
      return ctx.body  = responceText;
    }
    catch (error) {
      return ctx.body = resonceText = 'Oops, some error';
    }
}

import { getTasks } from '../../models/index';

export default async (ctx, next) => {
  const { request } = ctx;
  let responceText;
    try { 
      responceText = await getTasks();
      return ctx.body = responceText;
    }
    catch (error) {
      return ctx.body = responceText = 'Oops, some error';
    }
}

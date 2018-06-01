import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaDecodedQuerystring  from 'koa-decoded-querystring';
import router from './config/routes';

const port = 3000;
const app = new Koa();
  
app.use( koaDecodedQuerystring() );
app.use(router.routes(), router.allowedMethods());

app.listen( port );
  
console.log( port );
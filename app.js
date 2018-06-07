import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaDecodedQuerystring  from 'koa-decoded-querystring';
import serve from 'koa-static';
import cors from '@koa/cors';

import { configureRouter } from './api/controllers';

const port = 3000;
const app = new Koa();
const router = configureRouter();

app.use(bodyParser());
app.use(cors());
app.use( router.routes() ).use( router.allowedMethods() ) ;
app.use( koaDecodedQuerystring() );
app.use( serve('./public') );  
app.listen( port );

console.log( port );

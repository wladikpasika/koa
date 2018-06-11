const koa = require('koa');
const serve = require('koa-static');
const webpack = require("webpack");
const webpackDevMiddleware = require("koa-webpack-middleware").devMiddleware;
const hotMiddleware = require("koa-webpack-middleware").hotMiddleware;
const Router = require('koa-router');
const path = require('path');

const fs = require('fs');
const readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

const router = new Router();

const port = 7000;

const config = require('../config/webpack.config');
const compiler = webpack( config );

const app = new koa();
app.use( serve('./public') );
app.use( serve('./public/index.html') );
    router.get('/auth', async (ctx, next) => {
        ctx.type = 'html';
        return ctx.body = await readFileThunk( './public/index.html');
    });
app.use( hotMiddleware( compiler ) ); 
app.use( webpackDevMiddleware( compiler ) );

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port); 

console.log( port );

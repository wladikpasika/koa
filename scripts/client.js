const koa = require('koa');
const serve = require('koa-static');
const webpack = require("webpack");
const webpackDevMiddleware = require("koa-webpack-middleware").devMiddleware;
const hotMiddleware = require("koa-webpack-middleware").hotMiddleware;

const port = 7000;

const config = require('../config/webpack.config');
const compiler = webpack( config );

const app = new koa();
app.use( serve('./public') );
app.use( serve('./public/index.html') ); 
app.use( hotMiddleware( compiler ) ); 
app.use( webpackDevMiddleware( compiler ) );

app.listen(port); 

console.log( port );
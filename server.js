const nodemon = require('nodemon');
const path = require('path');
const babel = require("babel-core");
const transformFile = ('babel-core').transformFile;

nodemon({ script:  './node_modules/babel-cli/bin/babel-node.js ./app.js', ext: 'js json'}).on('start', function () {
  console.log('nodemon started');
}).on('crash', function () {
  console.log('script crashed for some reason');
});
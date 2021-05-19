const yargs = require('./config/yargs');
const { createFile } = require('./helpers/multiplicar');

console.clear();

createFile( yargs.b, yargs.l, yargs.h )
    .then((valor)=>console.log(valor))
    .catch((error)=>console.log(error));






const yargs = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Hasta que tabla quiere crear'
        })
        .check( (argv) => {
            if( isNaN(argv.b) ) {
                throw 'LA BASE TIENE QUE SER UN NUMERO';
            }
            return true
        }).argv

module.exports = yargs
const yargs = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            describe: 'Es la base de la tabloa de multiplicar',
            demandOption: true,
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            default: 10,
            describe: 'Este es el numero hasta donde quieres crear la tabla'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            describe: 'Muestra la tabla en consola',
            default: false
        })

        .check( (argv) => {
            if( isNaN(argv.b) ) {
                throw 'LA BASE TIENE QUE SER UN NUMERO';
            }
            return true
        }).argv

module.exports = yargs
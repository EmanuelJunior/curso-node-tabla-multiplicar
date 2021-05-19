const yargs = require('yargs')
            .option('n',{
                alias: 'name',
                type: 'string',
                describe: 'Name of the person',
                default: undefined,
                demandOption: true
            })
            .option('l', {
                alias: 'last_name',
                type: 'string',
                describe: 'last name of the person',
                default: undefined,
                demandOption: true
            })            
            .argv

const persona = (name, last_name) =>{
    return console.log('\nName:', name, '\nLast Name:', last_name,'\n');
}

persona(yargs.n, yargs.l);
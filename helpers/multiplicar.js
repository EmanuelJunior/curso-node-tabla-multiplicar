const fs = require('fs');
const colors = require('colors');

const createFile = async ( base = 5, listar, hasta = 10 )=>{
    
    try{
        
        let salida = `================================
    TABLA MULTIPLICAR DEL ${base}
================================
        \n`;
        
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync( `salida/tabla-${base}.txt`, salida);

        if(listar) console.log(salida.trap.rainbow);

        return `\nTabla-${base}.txt creaada\n`;

    }catch(error) {
        throw error;
    }        

}

module.exports = {
    createFile
}
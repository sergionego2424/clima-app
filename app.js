const { argv } = require('./config/yargs');
const { getInformacion } = require('./src/informacion/informacion');

const colors = require('colors');

getInformacion(argv.direccion)
					.then( console.log )
					.catch( console.log);

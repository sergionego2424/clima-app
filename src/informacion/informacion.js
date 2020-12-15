const { getLugarLatLong } = require('../lugar/lugar_ciudad');
const { getClima } = require('../clima/clima');

const colors = require('colors');

const getInformacion = async (direccion) => {
	const informacionCiudad = await getLugarLatLong(direccion);

	const climaCiudad = await getClima(informacionCiudad.lat1 , informacionCiudad.lon1);

	if(!climaCiudad){
		throw new Error(`El clima de la ${direccion} no se ha detectado`.red);
	}

	return `El clima de ${direccion} es ${climaCiudad}`.green;
}


module.exports = {
	getInformacion
}